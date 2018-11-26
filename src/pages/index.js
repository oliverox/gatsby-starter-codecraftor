import React from 'react'
import { Link } from 'gatsby'

import { Layout } from 'components'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
