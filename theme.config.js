export default {
  repository: 'https://github.com/shaodahong/h5-interview', // project repo
  docsRepository: 'https://github.com/shaodahong/h5-interview', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' / h5-interview',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 © shaodahong.',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: 'H5-Interview',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="h5-interview: h5前端面试" />
      <meta name="og:title" content="h5-interview: h5前端面试" />
    </>
  ),
}
