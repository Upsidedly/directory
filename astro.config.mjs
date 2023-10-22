import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '/upsided/',
			social: {
				discord: 'https://discord.gg/PKCTcBPB8r',
			},
			sidebar: [
				{
					label: 'Rules',
					link: '/rules/'
				},
				{
					label: 'FAQ',
					link: '/faq/'
				}
			],
		}),
	],
});
