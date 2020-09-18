exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions

  const podcastTemplate = require.resolve(`./src/templates/podcastTemplate.js`)

  const result = await graphql(`
    {
      podcastQuery: allMdx(
        sort: { order: DESC, fields: [frontmatter___publicationDate] },
        filter: {frontmatter: {type: {eq: "podcast-episode"}}}
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const podcasts = result.data.podcastQuery.edges

  podcasts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: podcastTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
