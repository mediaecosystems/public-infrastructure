import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import "typeface-quando"
import "typeface-lusitana"

import colors from "./colors"

const HeaderWrapper = styled.header`
  background: ${colors.offWhite};
  color: ${colors.uMass};
  text-align: right;
  margin: 15vh auto;
`

const SiteTitle = styled.h1`
  font-family: Quando;
  font-size: xx-large;
`

const StyledLink = styled(Link)`
  color: ${colors.uMass};
  text-decoration: none;
`

const SubHeader = styled.h2`
  font-family: Quando;
  text-align: right;
  line-height: 0;
  font-size: x-large;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <SiteTitle>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </SiteTitle>
      <SubHeader>@ UMass Amherst</SubHeader>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
