module.exports = {
  siteMetadata: {
    title: `The Institute for Digital Public Infrastructure`,
    description: `The Institute for Digital Public Infrastructure is a new research center based at the University of Massachusetts at Amherst, connecting the School for Public Policy, the Department of Communication, and the College of Information and Computer Sciences. The Institute studies the civic and social role of internet platforms, and advocates for approaches to digital infrastructures that treat platforms and supporting technologies as public spaces and public goods, not purely as profit-making ventures.`,
    author: `Mike Sugarman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: {
        title: `Podcast Title`,
        subtitle: `A pithy tagline`,
        description: `Podcast description`,
        summary: `Podcast summary`,
        podcastType: `episodic`,
        siteUrl: `https://podcast.com`,
        imageUrl: `https://podcast.com/podcast-image/png`,
        feedUrl: `https://podcast.com/pocast-rss-feed.xml`,
        language: `en-au`,
        copyright: `Copyright © 2020 Some Owner`,
        authorName: `The Author`,
        ownerName: `The Owner`,
        ownerEmail: `owner@podcast.com`,
        managingEditor: `editor@podcast.com`,
        webMaster: `support@podcast.com`,
        explicit: `no`,
        publicationDate: `Jan 25, 2020 10:00:00 GMT`,
        category1: `Arts`,
        subCategory1: `Books`,
        category2: `Education`,
        subCategory2: `Courses`,
        category3: `Business`,
        subCategory3: `Marketing`,
        timeToLive: `60`,
        outputPath: `/podcast-rss-feed.xml`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
