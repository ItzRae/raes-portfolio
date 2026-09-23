"""Visit the public landfall app and wake it if Streamlit has hibernated it."""

from selenium import webdriver
from selenium.common.exceptions import (
    NoSuchFrameException,
    StaleElementReferenceException,
    TimeoutException,
)
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

APP_URL = "https://fl-landfall-detector.streamlit.app/"
WAKE_BUTTON = (By.XPATH, "//button[contains(normalize-space(.), 'Yes, get this app back up')]")


def check_page(driver):
    """Click only the wake control; require rendered app content for success."""
    for button in driver.find_elements(*WAKE_BUTTON):
        if button.is_displayed() and button.is_enabled():
            button.click()
            print("Requested app wake-up.", flush=True)
            return False

    errors = driver.find_elements(By.CSS_SELECTOR, '[data-testid="stException"]')
    if any(error.is_displayed() for error in errors):
        raise RuntimeError("Streamlit loaded but the app reported an exception.")

    # The Streamlit shell alone does not prove that the Python app is running.
    headings = driver.find_elements(By.CSS_SELECTOR, '[data-testid="stAppViewContainer"] h1')
    return any(h.is_displayed() and "landfall" in h.text.lower() for h in headings)


def app_ready(driver):
    # Community Cloud may embed the app in an iframe.
    driver.switch_to.default_content()
    try:
        if check_page(driver):
            return True
        for frame in driver.find_elements(By.TAG_NAME, "iframe"):
            driver.switch_to.frame(frame)
            try:
                if check_page(driver):
                    return True
            finally:
                driver.switch_to.default_content()
        return False
    except (StaleElementReferenceException, NoSuchFrameException):
        # Waking the app can replace the page or its iframe during a poll.
        return False
    finally:
        driver.switch_to.default_content()


def main():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--window-size=1280,900")
    with webdriver.Chrome(options=options) as driver:
        driver.set_page_load_timeout(60)
        driver.get(APP_URL)
        try:
            WebDriverWait(driver, 180, poll_frequency=2).until(app_ready)
        except TimeoutException as exc:
            raise RuntimeError("App did not render its landfall heading within 180 seconds.") from exc
        print("Florida Landfall Detector is awake and rendered.", flush=True)


if __name__ == "__main__":
    main()
