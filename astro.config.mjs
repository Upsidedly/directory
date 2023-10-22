import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "/upsided/",
	//   logo: {
	// 	src: './src/assets/3du.png',
	// 	replacesTitle: false
	//   },
      social: {
        discord: "https://discord.gg/PKCTcBPB8r",
      },
	  editLink: {
		baseUrl: 'https://github.com/Upsidedly/directory/edit/master/'
	  },
      sidebar: [
        {
          label: "Information",
          items: [
            {
              label: "Rules",
              link: "/rules/",
            },
			{
				label: "Interesting Servers",
				link: "/interesting-servers/"
			},
            {
              label: "FAQ",
              link: "/faq/",
            },
          ],
        },
      ],
    }),
  ],
});
