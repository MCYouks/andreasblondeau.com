// import { version } from "../../package.json";

export default {
  lang: "en-US",
  title: "Home",
  description: "Vite & Vue powered static site generator.",

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide/": sidebarGuide(),
      "/config/": sidebarConfig(),
    },

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/andreasblondeau" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Andréas Blondeau",
    },

    algolia: {
      appId: "KJYTKENGPN",
      apiKey: "2a0d997b098d622ede8c21e598216550",
      indexName: "andreasblondeau",
    },

    // carbonAds: {
    //   code: "CEBDT27Y",
    //   placement: "vuejsorg",
    // },
  },
};

function nav() {
  return [
    {
      text: "Projects",
      link: "/guide/what-is-vitepress",
      activeMatch: "/guide/",
    },
    { text: "Blog", link: "/config/introduction", activeMatch: "/config/" },
    {
      text: "Contact",
      items: [
        {
          text: "Send me an email",
          link: "mailto:andreas@luego.eu",
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [
        { text: "What is VitePress?", link: "/guide/what-is-vitepress" },
        { text: "Getting Started", link: "/guide/getting-started" },
        { text: "Configuration", link: "/guide/configuration" },
        { text: "Deploying", link: "/guide/deploying" },
      ],
    },
    {
      text: "Writing",
      collapsible: true,
      items: [
        { text: "Markdown", link: "/guide/markdown" },
        { text: "Asset Handling", link: "/guide/asset-handling" },
        { text: "Frontmatter", link: "/guide/frontmatter" },
        { text: "Using Vue in Markdown", link: "/guide/using-vue" },
        { text: "API Reference", link: "/guide/api" },
      ],
    },
    {
      text: "Theme",
      collapsible: true,
      items: [
        { text: "Introduction", link: "/guide/theme-introduction" },
        { text: "Nav", link: "/guide/theme-nav" },
        { text: "Sidebar", link: "/guide/theme-sidebar" },
        { text: "Prev Next Link", link: "/guide/theme-prev-next-link" },
        { text: "Edit Link", link: "/guide/theme-edit-link" },
        { text: "Last Updated", link: "/guide/theme-last-updated" },
        { text: "Layout", link: "/guide/theme-layout" },
        { text: "Home Page", link: "/guide/theme-home-page" },
        { text: "Team Page", link: "/guide/theme-team-page" },
        { text: "Footer", link: "/guide/theme-footer" },
        { text: "Search", link: "/guide/theme-search" },
        { text: "Carbon Ads", link: "/guide/theme-carbon-ads" },
      ],
    },
    {
      text: "Migrations",
      collapsible: true,
      items: [
        {
          text: "Migration from VuePress",
          link: "/guide/migration-from-vuepress",
        },
        {
          text: "Migration from VitePress 0.x",
          link: "/guide/migration-from-vitepress-0",
        },
      ],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: "Config",
      items: [
        { text: "Introduction", link: "/config/introduction" },
        { text: "App Configs", link: "/config/app-configs" },
        { text: "Theme Configs", link: "/config/theme-configs" },
        { text: "Frontmatter Configs", link: "/config/frontmatter-configs" },
      ],
    },
  ];
}
