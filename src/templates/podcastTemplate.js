import React from "react"
import { graphql, Link } from "gatsby"

import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BodyWrapper = styled.div`

`

const Title = styled.h2`

`

const DateWrapper = styled.h3`

`

const EmbedWrapper = styled.div`

`

const Text = styled.body`

`

export default function Template({ data : { mdx } }) {
  const { frontmatter, body } = mdx

  const siteTitle = " | iDPI"
  const name = frontmatter.title.concat(siteTitle)

  return(
    <>

      <BodyWrapper>
        <Title>{frontmatter.title}</Title>
        <DateWrapper>{frontmatter.publicationDate}</DateWrapper>
        <EmbedWrapper>
          <iframe src={frontmatter.url} width="500" height="140" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
        </EmbedWrapper>
        <Text>
          <MDXRenderer>{body}</MDXRenderer>
        </Text>
      </BodyWrapper>
    </>
  )

}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        publicationDate(formatString: "MMMM DD, YYYY")
        slug
        title
        url
      }
    }
  }
`
