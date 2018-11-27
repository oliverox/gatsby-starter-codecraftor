const developMiddleware = require('./mw')
module.exports = {
  siteMetadata: {
    title: 'Codecraftor - Craft your site visually',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pagesMeta',
        path: `${__dirname}/src/pagesMeta`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-codecraftor',
        short_name: 'starter',
        start_url: '/',
        background_color: '#364699',
        theme_color: '#FCD303',
        display: 'minimal-ui',
        icon: 'src/images/codecraftor.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  developMiddleware,
}
