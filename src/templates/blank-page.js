import React from 'react'
import 'normalize.css'
import { Layout } from 'components'

const BlankPageTemplate = ({pageContext}) => {
  console.log('BlankPageTemplate pageContext.meta=', pageContext.meta);
  return <Layout><h1>Hello World</h1></Layout>
}

export default BlankPageTemplate
