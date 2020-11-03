import React from "react"
import { graphql, Link } from "gatsby"

import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "typeface-clear-sans"
import "typeface-lusitana"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h1`
  font-family: Lusitana;
`

const Description = styled.p`
  font-style: italic;
`

const PodcastsWrapper = styled.div`
  margin: 10vh 10vw;
`

const EpisodeWrapper = styled.div`
  width: 70vw;
  border-bottom: 1px solid;
  margin: 5vh auto;
`

const EpisodeDetails = styled.div`
    width: 75%;
`

const PodcastTitle = styled.h2`
  font-family: Lusitana;
`

const Text = styled.body`
  font-family: Clear Sans;
`

const Podcast = ({ data }) => {
  const { edges } = data.posts
  const image = data.image
    ? data.image.childImageSharp.fluid
    : null

  return(
    <>
      <SEO
        title='Reimagining the Internet'
        image={image}
        pathname='/podcast'
      />
      <Layout>
        <PodcastsWrapper>
          <Title>Reimagining the Internet</Title>
          <Description>
            We're talking to some of the most exciting scholars, activists, journalists, and entrepreneurs in our field about what's wrong with social media and how to fix it.
            <br />
            <br />
            Select an episode below to watch the interview. Be sure to subscribe to "Reimagine the Internet" on your favorite podcast app.
          </Description>
          {edges.map(({node}) => {
            const { body } = node
            const { publicationDate, title, slug, excerpt } = node.frontmatter
            return(
              <EpisodeWrapper>
                <EpisodeDetails>
                  <Link to={slug}>
                    <PodcastTitle>{title}</PodcastTitle>
                  </Link>
                  <Text>
                    {excerpt}
                  </Text>
                </EpisodeDetails>
              </EpisodeWrapper>
            )
          })}
        </PodcastsWrapper>
      </Layout>
    </>
  )

}

export default Podcast

export const blogListQuery = graphql`
  query blogListQuery {
    posts: allMdx(
      filter: { frontmatter: { type: { eq: "podcast-episode" } } }
      sort: { fields: [frontmatter___publicationDate], order: DESC }
    ) {
      edges {
        node {
          body
          excerpt(pruneLength: 200)
          frontmatter {
            publicationDate
            excerpt
            title
            slug
            url
          }
        }
      }
    }
    image: file(relativePath: {eq: "pod-social-card.png"}) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
  }
`
