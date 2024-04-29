import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import playformCompress from "@playform/compress";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: "https://mdl.ai",
    markdown: {
        shikiConfig: {
            theme: "tokyo-night",
            wrap: true
        }
    },
    // trailingSlash: "always",
    integrations: [
        mdx(),
        tailwind(),
        sitemap(),
        playformCompress(),
        icon(),
        solidJs()
    ]
});