// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://macaujack.github.io",
  base: "/zkp-blogs",
  integrations: [
    starlight({
      title: "ZKP Blogs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/macaujack/zkp-blogs",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          link: "/",
        },
        {
          label: "Foundational Math",
          autogenerate: { directory: "math" },
        },
        {
          label: "Groth16",
          autogenerate: { directory: "groth16" },
        },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css",
            integrity:
              "sha384-Pu5+C18nP5dwykLJOhd2U4Xen7rjScHN/qusop27hdd2drI+lL5KvX7YntvT8yew",
            crossorigin: "anonymous",
          },
        },
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.js",
            integrity:
              "sha384-2B8pfmZZ6JlVoScJm/5hQfNS2TI/6hPqDZInzzPc8oHpN5SgeNOf4LzREO6p5YtZ",
            crossorigin: "anonymous",
          },
        },
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-XCZEPWKCB8",
          },
        },
        {
          tag: "script",
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XCZEPWKCB8');
          `,
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: false,
    },
  },
});
