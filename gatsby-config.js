module.exports = {
  siteMetadata: {
    title: 'Sourceful',
    description: 'Friendly provider of best clothing manufacturers',
    author: 'Fanny & Viktorija',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      // eslint-disable-next-line no-dupe-keys
      resolve: 'gatsby-source-firestore',
      // eslint-disable-next-line no-dupe-keys
      options: {
        // eslint-disable-next-line global-require
        credential: require('./src/services/cred.json'),
        types: [
          {
            type: 'Factory',
            collection: 'factories',
            map: (doc) => ({
              address: doc.address,
              category: doc.category,
              certificates: doc.certificates,
              contact: doc.contact,
              continent: doc.continent,
              description: doc.description,
              employee: doc.employee,
              id: doc.id,
              name: doc.name,
              producttype: doc.producttype,
              summary: doc.summary,
            }),
          },
        ],
      },
    },
    'gatsby-plugin-material-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
