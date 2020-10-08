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
        name: `institute-digital-public-infrastructure`,
        short_name: `iDPI`,
        start_url: `/`,
        background_color: `#f9f6ef`,
        theme_color: `#a50000`,
        display: `minimal-ui`,
        icon: `src/images/red-logo-manifest.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: {
        title: `Reimagine the Internet`,
        subtitle: `An Institute for Digital Public Infrastructure production`,
        description: `Reimagine the Internet is a production of the Institute for Digital Public Infrastructure at UMass Amherst, asking scholars, activists, journalists, and artists what is broken on the internet and how to fix it.`,
        summary: `Reimagine the Internet is a production of the Institute for Digital Public Infrastructure at UMass Amherst, asking scholars, activists, journalists, and artists what is broken on the internet and how to fix it.`,
        podcastType: `episodic`,
        siteUrl: `https://publicinfrastructure.org/podcast`,
        imageUrl: `https://publicinfrastructure.org/static/d1d91a4c81f88819dc5e04cff140c6ab/3c17d/idpi-logo-square.png`,
        feedUrl: `https://publicinfrastructure.org/pocast-rss-feed.xml`,
        language: `en-us`,
        copyright: `Copyright © 2020 Institute for Digital Public Infrastructure`,
        authorName: `Ethan Zuckerman`,
        ownerName: `Ethan Zuckerman`,
        ownerEmail: `ethanz@gmail.com`,
        managingEditor: `mpsugarman@gmail.com`,
        webMaster: `mpsugarman@gmail.com`,
        explicit: `no`,
        publicationDate: `Jan 25, 2020 10:00:00 GMT`,
        category1: `Technology`,
        category2: `Government`,
        category3: `News`,
        subCategory3: `Tech News`,
        category4: `Science`,
        subCategory4: `Social Sciences`,
        timeToLive: `60`,
        outputPath: `/podcast-rss-feed.xml`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}