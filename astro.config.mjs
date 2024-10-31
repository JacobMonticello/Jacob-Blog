// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	//base: '/JacobBlog/', // GitHub repository name
	integrations: [mdx(), sitemap()],
});
