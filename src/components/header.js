import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import colors from "./colors"

const HeaderWrapper = styled.header`
  background: ${colors.offWhite};
  color: ${colors.uMass};
  text-align: right;
  margin: 15vh auto;
`

const SiteTitle = styled.h1`

`

const StyledLink = styled(Link)`
  color: ${colors.uMass};
  text-decoration: none;
`

const SubHeader = styled.h2`
  text-align: right;
  line-height: 0;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>
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
