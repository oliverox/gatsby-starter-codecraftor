import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import {
  Classes,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core'

import './EditorLayout.css'

const EditorLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query EditorSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navbar>
          <NavbarGroup>
            <NavbarHeading>Codecraftor</NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="home" text="Home" />
            <Button className={Classes.MINIMAL} icon="document" text="Files" />
          </NavbarGroup>
        </Navbar>
        <div>{children}</div>
      </>
    )}
  />
)

EditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EditorLayout
