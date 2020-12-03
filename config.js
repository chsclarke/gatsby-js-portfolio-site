
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
  
  siteTitle: 'About Chase Clarke', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/apple-touch-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Chase',
  lastName: 'Clarke',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/chsclarke',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/chase-clarke-10b1a1119/',
    },
    {
      icon: 'fas fa-envelope',
      name: 'Mail',
      url: 'mailto: me@chaseclarke.com',
    },
  ],
  email: 'me@chaseclarke.com',
  // phone: '847-609-8426',
  address: 'San Franciso, CA',
};
