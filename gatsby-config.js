module.exports = {
  siteMetadata: {
    title: `The Initiative for Digital Public Infrastructure`,
    description: `The Initiative for Digital Public Infrastructure is a new research center based at the University of Massachusetts at Amherst, connecting the School for Public Policy, the Department of Communication, and the College of Information and Computer Sciences. The Initiative studies the civic and social role of internet platforms, and advocates for approaches to digital infrastructures that treat platforms and supporting technologies as public spaces and public goods, not purely as profit-making ventures.`,
    author: `The Initiative for Digital Public Infrastructure at UMass Amherst`,
    siteUrl: `https://publicinfrastructure.org`,
    keywords: ['digital', 'public', 'infrastructure'],
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
        name: `initiative-digital-public-infrastructure`,
        short_name: `iDPI`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b51700`,
        display: `minimal-ui`,
        icon: `src/images/manifest.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: {
        title: `Reimagining the Internet`,
        subtitle: `An Initiative for Digital Public Infrastructure production`,
        description: `Reimagining the Internet is a production of the Initiative for Digital Public Infrastructure at UMass Amherst, asking scholars, activists, journalists, and artists what is broken on the internet and how to fix it.`,
        summary: `Reimagining the Internet is a production of the Initiative for Digital Public Infrastructure at UMass Amherst, asking scholars, activists, journalists, and artists what is broken on the internet and how to fix it.`,
        podcastType: `episodic`,
        siteUrl: `https://publicinfrastructure.org`,
        imageUrl: `https://publicinfrastructure.org/static/48b9da8b36ec3ec829bf4569e84fe9b2/54967/podcast-logo.png`,
        feedUrl: `https://publicinfrastructure.org/pocast-rss-feed.xml`,
        language: `en-us`,
        copyright: `Copyright © 2021 Initiative for Digital Public Infrastructure`,
        authorName: `Initiative for Digital Public Infrastructure`,
        ownerName: `Ethan Zuckerman`,
        ownerEmail: `idpi.umass@gmail.com`,
        managingEditor: `msugarman@umass.edu`,
        webMaster: `msugarman@umass.edu`,
        explicit: `no`,
        publicationDate: `Oct 20, 2020 14:00:00 GMT`,
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
    `gatsby-plugin-emotion`,
    'gatsby-plugin-remove-serviceworker',
  ],
}
