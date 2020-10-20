import React from "react"
import { graphql, Link } from "gatsby"

import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "typeface-clear-sans"
import "typeface-lusitana"

import Layout from "../components/layout"
import Image from "../components/image"
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

const YoutubeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`

const IframeStyle = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const IndexPage = ({ data }) => {
  const post = data.aboutText
  const image = data.defaultImage
    ? data.defaultImage.childImageSharp.fluid
    : null

  return(
    <Layout>
      <SEO
        title="The Institute for Digital Public Infrastructure"
        image={image}
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
    defaultImage: file(relativePath: {eq: "red-logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
