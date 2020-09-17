import React from "react"
import { graphql, Link } from "gatsby"

import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "typeface-clear-sans"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

const AboutText = styled.main`
  grid-column: 1/7;
  font-family: Clear Sans;
`

const YoutubeWrapper = styled.div`
  margin: 10vh auto;
  grid-column: 7/13;
  grid-row: 2;
`

const IndexPage = ({ data }) => {
  const post = data.aboutText

  return(
    <Layout>
      <SEO title="Home" />
      <IndexWrapper>
        <AboutText>
          <MDXRenderer>{post.body}</MDXRenderer>
          <iframe width='100%' height='310' src="https://www.youtube.com/watch?v=KGXpNpS9aTY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </AboutText>
      </IndexWrapper>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
   query IndexQuery {
    aboutText: mdx(frontmatter: {title: {eq: "About Text"}}) {
      body
    }
  }
`
