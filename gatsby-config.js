module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`pages`,
        path: `${__dirname}/src/pages`
      },
    },
     {
      resolve: `gatsby-plugin-google-fonts`,
      options:{
        fonts: [ `Montserrat`, `muli\:400,400i,700,700i`,],
        display:"swap",
      },
     },
  ],
}
