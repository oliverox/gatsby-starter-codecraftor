import React from 'react'
import 'normalize.css'
import { Layout } from 'components'

const BlankPageTemplate = (props) => {
  console.log('BlankPageTemplate props=', props);
  return <Layout><h1>Hello World</h1></Layout>
}

export default BlankPageTemplate
