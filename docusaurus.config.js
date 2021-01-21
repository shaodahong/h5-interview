module.exports = {
  title: 'H5-Interview',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shaodahong', // Usually your GitHub org/user name.
  projectName: 'h5-interview', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'H5-Interview',
      logo: {
        alt: 'H5-Interview Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/shaodahong/h5-interview',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/shaodahong/h5-interview/edit/master/docs/',
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
