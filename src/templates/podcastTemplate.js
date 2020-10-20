import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BodyWrapper = styled.div`
  margin: 0 10vw;
`

const Title = styled.h1`
  font-family: Lusitana;
`

const DateWrapper = styled.h4`
  font-family: Lusitana;
  line-height: 0;
  margin-bottom: 10vh;
`

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 50vw;
`

const Text = styled.body`
  font-family: Clear Sans;
  margin: 10vh auto;
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

const EmbedStyled = styled.div`
  margin-bottom: -5vw;
`

export default function Template({ data : { mdx } }) {
  const { frontmatter, body, id } = mdx
  const { publicationDate, slug, title, embed, youtubeEmbedURL, featuredImage, excerpt } = frontmatter

  const siteTitle = " | iDPI"
  const name = frontmatter.title.concat(siteTitle)

  const SEOimage = frontmatter.featuredImage.childImageSharp.fluid

  return(
    <Layout>
      <SEO
        title={frontmatter.title}
        image={SEOimage}
        description={frontmatter.excerpt}
        pathname={frontmatter.slug}
      />
      <BodyWrapper>
        <Title>{title}</Title>
        <DateWrapper>{publicationDate}</DateWrapper>
        <ImageWrapper>
          <Img fluid={frontmatter.featuredImage.childImageSharp.fluid}/>
        </ImageWrapper>
        <Text>
          <MDXRenderer>{body}</MDXRenderer>
        </Text>
        <EmbedStyled>
          <iframe src={embed} frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen />
        </EmbedStyled>

        <YoutubeWrapper>
          <IframeStyle
            src={youtubeEmbedURL}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </YoutubeWrapper>
      </BodyWrapper>
    </Layout>
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
        excerpt
        embed
        youtubeEmbedURL
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
