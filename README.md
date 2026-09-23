# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Streamlit app wake-up

[Wake Florida Landfall Detector](https://github.com/ItzRae/raes-portfolio/actions/workflows/wake-streamlit.yml)
visits the public app every four hours at minute 17 (UTC). It also runs when its
script or workflow changes on `main`, and supports **Run workflow** in GitHub Actions.
It clicks Streamlit's wake-up button when present and requires a rendered landfall
heading before reporting success. Errors and timeouts fail the run.

This follows the browser-visit approach described in
[the guide](https://dev.to/virgoalpha/keeping-your-streamlit-app-awake-using-selenium-and-github-actions-4ajd),
using Selenium's built-in driver manager. No secrets are required; the workflow
has read-only repository permissions and does not commit changes.

This is best-effort availability, not an uptime guarantee. GitHub may delay scheduled
runs and disables scheduled workflows in public repositories after 60 days without
repository activity. Check Actions if visits stop, and re-enable the workflow when
needed. Streamlit UI changes may require updating the button or heading selectors.

To run locally with Python 3.12 and Chrome available:

```sh
python -m venv /tmp/streamlit-wake-venv
/tmp/streamlit-wake-venv/bin/pip install -r scripts/requirements-wake.txt
/tmp/streamlit-wake-venv/bin/python scripts/wake_streamlit.py
```
