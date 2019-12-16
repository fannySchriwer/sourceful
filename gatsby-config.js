module.exports = {
	siteMetadata: {
		title: 'Sourceful',
		description: 'Friendly provider of best clothing manufacturers',
		author: 'Fanny & Viktorija'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-theme-ui',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages/`
			},
			// eslint-disable-next-line no-dupe-keys
			resolve: `@martinreiche/gatsby-firestore`,
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
							quantity: doc.quantity,
							name: doc.name,
							producttype: doc.producttype,
							summary: doc.summary
						})
					},
					{
						type: 'User',
						collection: 'users',
						map: (doc) => ({
							email: doc.email,
							userId: doc.userId
						}),
						subCollections: [
							{
								type: `List`,
								collection: `myList`,
								map: (doc) => ({
									name: doc.name,
									comment: doc.comment
								})
							}
						]
					}
				]
			}
		},
		'gatsby-plugin-material-ui',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-datocms',
			options: {
				// You can find your read-only API token under the Settings > API tokens
				// section of your administrative area:
				apiToken: '21d2805ce02b88da6bd0debdc60e50',
				// If you are working on development/staging environment, you might want to
				// preview the latest version of records instead of the published one:
				previewMode: true,

				// Disable automatic reloading of content when some change occurs on DatoCMS:
				disableLiveReload: false,

				// Custom API base URL
				apiUrl: 'https://site-api.datocms.com'
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
