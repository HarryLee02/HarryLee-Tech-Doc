// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HarryLee Tech Doc',
  tagline: 'IT is cool',
  favicon: 'img/favicon/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.harrylee.id.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HarryLee02', // Usually your GitHub org/user name.
  projectName: 'HarryLee-Tech-Doc', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          
          editUrl:
            'https://github.com/HarryLee02/HarryLee-Tech-Doc/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        
        // to deploy docs only
        blog: false,

        // to deploy with blog

        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },

        //   editUrl:
        //     'https://github.com/HarryLee02/HarryLee-Tech-Doc/tree/main/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // }
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'VFD0G7AXZF',
        // 49S98L4BDP: harrylee02io
        // Public API key: it is safe to commit it
        apiKey: '5293836a48fa23d02e460467042115cc',
        // 5e5f185c29d87f859bed0d8b0ffa2315 harrylee02io
        indexName: 'harrylee-id',

        placeholder: 'Search for HarryLee\'s Doc',

        translations:{
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search',
          },
          modal: {
            searchBox: {
              resetButtonTitle: 'Clear the query',
              resetButtonAriaLabel: 'Clear the query',
              cancelButtonText: 'Cancel',
              cancelButtonAriaLabel: 'Cancel',
              searchInputLabel: 'Search',
            },
            startScreen: {
              recentSearchesTitle: 'Recent',
              noRecentSearchesText: 'No recent searches',
              saveRecentSearchButtonTitle: 'Save this search',
              removeRecentSearchButtonTitle: 'Remove this search from history',
              favoriteSearchesTitle: 'Favorite',
              removeFavoriteSearchButtonTitle: 'Remove this search from favorites',
            },
            errorScreen: {
              titleText: 'Unable to fetch results',
              helpText: 'You might want to check your network connection.',
            },
            footer: {
              selectText: 'to select',
              selectKeyAriaLabel: 'Enter key',
              navigateText: 'to navigate',
              navigateUpKeyAriaLabel: 'Arrow up',
              navigateDownKeyAriaLabel: 'Arrow down',
              closeText: 'to close',
              closeKeyAriaLabel: 'Escape key',
              searchByText: 'Search by',
            },
            noResultsScreen: {
              noResultsText: 'No results for',
              suggestedQueryText: 'Try searching for',
              reportMissingResultsText: 'Believe this query should return results?',
              reportMissingResultsLinkText: 'Let us know.',
            },
          },
        },
        getMissingResultsUrl({ query }) {
          return `https://github.com/algolia/docsearch/issues/new?title=${query}`;
        },
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false
      
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HarryLee\'s Tech Doc',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo/logo.svg',
          srcDark: 'img/logo/logo_dark.svg',
          target: '_self',
          href: 'https://docs.harrylee.id.vn/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documents',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: 'https://www.linkedin.com/in/hieule-harrylee/',
            label: 'LinkedIn',
            className: 'header-linkedin-link',
            target: '_blank',
            position: 'right'
          },
          {
            to: 'https://github.com/HarryLee02/HarryLee-Tech-Doc',
            label: 'GitHub',
            className: 'header-github-link',
            target: '_blank',
            position: 'right'
          },
        ],
        hideOnScroll: true
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                // to: '/docs/intro',
                to: "/intro"
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/22062015/lillee',
              },
              
              {
                label: 'Carrd.co',
                href: 'https://harrylee02.carrd.co/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/HarryLee02/HarryLee-Tech-Doc',
              },
            ],
          },
        ],
        logo: {
          alt: 'HarryLee Logo',
          src: 'img/logo/harrylee_logo_default.svg',
          href: 'https://harrylee02.carrd.co/',
          target: '_blank',
        },
        copyright: `Copyright © ${new Date().getFullYear()} HarryLee Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
