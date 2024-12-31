import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
        adapter: adapter({
            // Define the output directory for GitHub Pages
            pages: 'build',
            assets: 'build',
            fallback: 'app.html',
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/raes portfolio' : '',
        },
        appDir: 'internal',
    }
};

export default config;
