import compress from "astro-compress"
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "github-light",
		},
	},
	integrations: [mdx(), sitemap(), compress()],
	site: "https://vedarc.io/",
})
