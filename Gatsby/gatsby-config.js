module.exports = {
  siteMetadata: {
    title: "Liberty Lockdown",
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "e5era36a",
        dataset: "production",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: `/`,
        icon: "src/images/icon.png",
        cache_busting_mode: "none",
        crossOrigin: `anonymous`, // `use-credentials` or `anonymous`
        display: `standalone`,
        icon: "src/images/icon.png",
        theme_color: `#000000`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
  ],
};
