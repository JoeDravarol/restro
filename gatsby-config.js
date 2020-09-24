module.exports = {
  siteMetadata: {
    title: `Restro Mediterranean Restaurant`,
    description: `Restro is an authentic Mediterranean Restaurant with warm friendly hospitality to create a memorable dining experience.`,
    author: `@restro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Restro`,
        short_name: `Restro`,
        start_url: `/`,
        background_color: `#f9f8f7`,
        theme_color: `#ff6d23`,
        display: `minimal-ui`,
        icon: `src/images/restaurant-favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
