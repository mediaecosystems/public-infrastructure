import React from "react"
import { graphql } from "gatsby"

import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "typeface-clear-sans"
import "typeface-lusitana"

import Layout from "../components/layout"
import SEO from "../components/seo"

const breakpoints = [600]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const IndexWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

const AboutText = styled.main`
  grid-column: 1/13;
  font-family: Clear Sans;
  ${mq[0]} {
    grid-column: 1/7;
  }
`

const IndexPage = ({ data }) => {
  const post = data.aboutText
  const image = data.defaultImage
    ? data.defaultImage.childImageSharp.fluid
    : null

  return(
    <Layout>
      <SEO
        title="The  for Digital Public Infrastructure"
      />
      <IndexWrapper>
        <AboutText>
          <MDXRenderer>{post.body}</MDXRenderer>
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
    defaultImage: file(relativePath: {eq: "main-social-card.png"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
