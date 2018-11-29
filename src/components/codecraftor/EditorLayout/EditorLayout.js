import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import {
  Classes,
  Button,
  Navbar,
  Icon,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core'

import logo from '../../../images/codecraftor.png'

import styles from './EditorLayout.module.css'

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
    render={data => {
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" className={styles.html} />
            <body className={styles.body} />
          </Helmet>
          <Navbar
            style={{
              backgroundColor: '#364699',
            }}
          >
            <NavbarGroup>
              <NavbarHeading className={styles.navbarHeading}>
                <img
                  style={{ paddingRight: 5 }}
                  src={logo}
                  alt="Craft your code visually"
                  height={25}
                />
                <span>codecraftor</span>
              </NavbarHeading>
              <NavbarDivider />
              <Button
                className={Classes.MINIMAL}
                style={{ color: '#fff' }}
                icon={<Icon style={{ color: '#fff' }} icon="home" />}
                text="Home"
              />
              <Button
                className={Classes.MINIMAL}
                style={{ color: '#fff' }}
                icon={<Icon style={{ color: '#fff' }} icon="document" />}
                text="Pages"
              />
            </NavbarGroup>
          </Navbar>
          <div className={styles.editorContainer}>{children}</div>
        </>
      )
    }}
  />
)

EditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EditorLayout
