require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Instytut Praw Migrantów`,
    description: `Oferujemy wsparcie informacyjne dla migrantów z Dolnego Śląska. `,
    titleTemplate: `%s | IPM`,
    url:`instytutpm.eu`,
    image:`/static/Screenshot.png`,
    twitterUsername:`@Instytutipm`
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `ubuntu`,
          `source sans pro\:300,400,500,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
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
        name: `Instytut Praw Migrantów`,
        short_name: `IPM`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    `gatsby-plugin-offline`,
  ],
}
