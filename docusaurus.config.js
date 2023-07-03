// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ThreeD Studio Docs',
  tagline: 'Build truly beautiful experiences on the web',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.threed.world',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'open-threed', // Usually your GitHub org/user name.
  projectName: 'threed-studio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ThreeD Studio Docs',
        logo: {
          alt: 'ThreeD Studio Docs Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
            href: 'https://open-threed.hashnode.dev',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/open-threed/studio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Contribute',
                to: '/docs/category/contribute',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Open Collective',
                href: 'https://opencollective.com/open-threed',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/hxbwuDckeg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OpenThreeD',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://open-threed.hashnode.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/open-threed/studio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open ThreeD. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
