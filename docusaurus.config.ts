import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "COP 3504C",
  tagline: "Pointers are cool",
  favicon: "img/uf/uf_favicon_blue.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "COP3504CSp25", // Usually your GitHub org/user name.
  projectName: "ProgDocs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "COP 3504C",
      logo: {
        alt: "UF Logo",
        src: "img/uf/uf_logo_black_square.png",
        srcDark: "img/uf/uf_logo_white_square.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "courseSidebar",
          position: "left",
          label: "Our Course",
        },
        {
          href: "https://ufl.instructure.com/login/saml/355",
          label: "Canvas",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Our Course",
          items: [
            {
              label: "Syllabus",
              to: "/docs/syllabus",
            },
            {
              label: "Labs",
              to: "/docs/category/labs",
            },
            {
              label: "Projects",
              to: "/docs/category/projects",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord for Spring '25",
              href: "https://discord.gg/W7VE5SsTpJ",
            },
            {
              label: "UF CSU",
              href: "https://ufcsu.org/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with ❤️ using Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

export default config;
