import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

let locale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'uk';
if (locale === "undefined") {
  locale = 'uk';
}

const config: Config = {
  title: {
    uk: 'Кращий Bluesky',
    en: 'Bluesky for Ukrainians',
  }[locale] || locale,
  tagline: {
    uk: 'Покращення стрічки для українців',
    en: 'Additional moderation tools for Ukrainians, by Ukrainians',
  }[locale],
  // favicon: 'img/favicon.ico',

  url: "https://bsky.watch",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "bsky.watch",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Інформація",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} bsky.watch`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
