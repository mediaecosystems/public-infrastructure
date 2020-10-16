import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const PodcastImage = ({ data }) => {
  return(
    <div>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  )
}

export default PodcastImage

export const query = graphql`
  query {
    file(relativePath: { eq: "red-podcast.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
