require("dotenv").config({
  path: `.env`,
})

module.exports = {
  flags:{DEV_SSR:true,FAST_DEV:true},
  siteMetadata: {
    title: `Rinil Kunhiraman | Web Developer`,
    description: `Website portfolio of Rinil Kunhiraman`,
    author: `Rinil Kunhiraman`,
    image: ``,
    keywords:['portfolio','javascript','gatsby'],
    siteUrl: "https://www.rinilkunhiraman.dev",
    social:{
      twitter:`rinilkunhiraman`,
      facebook:`rinilkunhiraman`,
      instagram:`rinilkunhiraman`,
      linkedin:`rinilkunhiraman`,
    }
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options:{
        name: `Rinil Kunhiraman`,
        short_name: `RK`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/icon.png` ,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
      __key: "assets",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000, // Default to 100
        collectionTypes: ["jobs", "projects", "blogs", "services","products"],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Roboto\:400,700`,
            `Open Sans`,
        ],
        display:'swap'
      },
    },
  ],
};
