import React from "react"
import { graphql, Link } from "gatsby"

import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "typeface-clear-sans"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Title = styled.h1`
  margin: auto 10vw;
`

const PodcastsWrapper = styled.div`

`

const EpisodeWrapper = styled.div`
  width: 70vw;
  margin: 10vh auto;
  border-bottom: 5px solid;
`

const EpisodeDetails = styled.div`
    width: 75%;
`

const PodcastTitle = styled.h2`

`

const Embed = styled.iframe`
  border: 0;
  height: 50px;
  width: 100%;
  justify-content: left;
`

const Text = styled.body`
  font-family: Clear Sans;
`

const Podcast = ({ data }) => {
  const { edges } = data.allMdx

  return(
    <>
      <SEO title='title' />
      <Layout>
        <Title>Reimagine the Internet</Title>
        {edges.map(({node}) => {
          const { body, excerpt } = node
          const { publicationDate, title, slug, url } = node.frontmatter
          return(
            <EpisodeWrapper>
              <EpisodeDetails>
                <Link to={slug}>
                  <PodcastTitle>{title}</PodcastTitle>
                </Link>
                <Embed src={url} width='100%' height='auto' webkitallowfullscreen="true" mozallowfullscreen="true" />
                <Text>
                  <MDXRenderer>{body}</MDXRenderer>
                </Text>
              </EpisodeDetails>
            </EpisodeWrapper>
          )
        })}
      </Layout>
    </>
  )

}

export default Podcast

export const blogListQuery = graphql`
  query blogListQuery {
    allMdx(
      filter: { frontmatter: { type: { eq: "podcast-episode" } } }
      sort: { fields: [frontmatter___publicationDate], order: DESC }
    ) {
      edges {
        node {
          body
          excerpt(pruneLength: 200)
          frontmatter {
            publicationDate
            title
            slug
            url
          }
        }
      }
    }
  }
`
