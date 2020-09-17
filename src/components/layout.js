/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import "typeface-clear-sans"

import Header from "./header"
import "./layout.css"
import colors from "./colors"

const LayoutWrapper = styled.div`
  background: ${colors.offWhite};
  padding: 1vh 5vw;
  min-height: 100vh;
`

const MainWrapper = styled.main`
  font-family: Clear Sans;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>
        {children}
      </MainWrapper>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
