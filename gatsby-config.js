module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`pages`,
        path: `${__dirname}/src/pages`
      },
    },
  ],
}
