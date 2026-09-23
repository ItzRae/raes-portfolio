"""Exercise wake-up, error and readiness decisions without a live service."""

import unittest
from unittest.mock import MagicMock

from wake_streamlit import WAKE_BUTTON, app_ready
from selenium.webdriver.common.by import By


def element(text=""):
    item = MagicMock()
    item.is_displayed.return_value = True
    item.is_enabled.return_value = True
    item.text = text
    return item


class WakeTests(unittest.TestCase):
    def driver(self, elements):
        driver = MagicMock()
        driver.find_elements.side_effect = lambda *selector: elements.get(selector, [])
        return driver

    def test_sleeping_app_clicks_wake_but_is_not_yet_ready(self):
        button = element()
        driver = self.driver({WAKE_BUTTON: [button]})
        self.assertFalse(app_ready(driver))
        button.click.assert_called_once()

    def test_blank_or_error_page_is_not_assumed_awake(self):
        self.assertFalse(app_ready(self.driver({})))

    def test_rendered_landfall_heading_is_ready(self):
        driver = self.driver({
            (By.CSS_SELECTOR, '[data-testid="stAppViewContainer"] h1'):
                [element("Florida Landfall Detector")],
        })
        self.assertTrue(app_ready(driver))

    def test_app_exception_fails(self):
        driver = self.driver({
            (By.CSS_SELECTOR, '[data-testid="stException"]'): [element()],
        })
        with self.assertRaises(RuntimeError):
            app_ready(driver)

    def test_embedded_app_is_checked_and_frame_context_restored(self):
        driver = self.driver({(By.TAG_NAME, 'iframe'): [element()]})
        headings = (By.CSS_SELECTOR, '[data-testid="stAppViewContainer"] h1')
        driver.find_elements.side_effect = lambda *selector: (
            [element("Florida Landfall Detector")]
            if selector == headings and driver.switch_to.frame.called
            else [element()] if selector == (By.TAG_NAME, 'iframe') else []
        )
        self.assertTrue(app_ready(driver))
        driver.switch_to.default_content.assert_called()


if __name__ == '__main__':
    unittest.main()
