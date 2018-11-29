import React from 'react'
import { graphql } from 'gatsby'
import 'normalize.css'
import { Layout, ComponentDrop } from 'components'

class PageCraftor extends React.Component {
  constructor(props) {
    super(props)
    this.key = 0
    this.meta = {}
    this.state = {
      loading: true,
    }
    this.initialRender = true
    this.components = {}
    this.rootComponent = false
    this.importComponents = this.importComponents.bind(this)
    this.updateComponents = this.updateComponents.bind(this)
    this.buildDomTree = this.buildDomTree.bind(this)
    this.getComponentIndex = this.getComponentIndex.bind(this)
    this.getPageMetaFromData = this.getPageMetaFromData.bind(this)
    this.getComponentAndItsChildren = this.getComponentAndItsChildren.bind(this)
  }

  componentDidMount() {
    this.importComponents().then(() => {
      this.buildDomTree()
      this.setState({
        loading: false,
      })
    })
  }

  getPageMetaFromData(data) {
    const { pageName } = this.props.pageContext
    const allPagesMeta = data.allPagesMetaJson.edges.filter(
      edge => edge.node.name === pageName
    )
    return allPagesMeta[0].node
  }

  buildDomTree() {
    console.log('buildDomTree()...')
    this.rootComponent = this.getComponentAndItsChildren('root', 0)
  }

  getComponentAndItsChildren(id) {
    const { Module, props = '{}', children = [] } = this.components[id]
    let childrenComponents = []
    if (children && children.length > 0) {
      childrenComponents = children.map(childId => {
        return this.getComponentAndItsChildren(childId)
      })
    }
    return (
      <Module key={this.key++} {...JSON.parse(props)}>
        {childrenComponents.length > 0 ? childrenComponents : null}
      </Module>
    )
  }

  getComponentIndex(componentName) {
    return this.meta.imports.indexOf(componentName)
  }

  updateComponents() {
    this.meta = this.getPageMetaFromData(this.props.data)
    const { props, children } = this.meta.root
    this.components.root.props = props
    this.components.root.children = children
    for (let i = 0; i < this.meta.components.length; i++) {
      const { id, props = '', children = [] } = this.meta.components[i]
      this.components[id].props = props
      this.components[id].children = children
    }
    console.log('this.components=', this.components)
  }

  importComponents() {
    console.log('importComponents()...')
    this.meta = this.getPageMetaFromData(this.props.data)
    const componentImportArray = this.meta.imports.map(componentName => {
      console.log(
        `>> importing ../components/general/${componentName}/${this.meta.ui}`
      )
      return import(`../components/general/${componentName}/${this.meta.ui}`)
    })
    return Promise.all(componentImportArray).then(importedComponents => {
      let index = this.getComponentIndex(this.meta.root.componentName)
      this.components.root = {
        Module: importedComponents[index].default,
        props: this.meta.root.props,
        children: this.meta.root.children,
      }
      for (let i = 0; i < this.meta.components.length; i++) {
        console.log(
          'updating component:',
          this.meta.components[i].componentName
        )
        const { id, props = '', children = [] } = this.meta.components[i]
        const componentIndex = this.getComponentIndex(
          this.meta.components[i].componentName
        )
        this.components[id] = {
          Module: importedComponents[componentIndex].default,
          props,
          children,
        }
      }
    })
  }

  render() {
    if (!this.initialRender) {
      this.updateComponents()
      this.buildDomTree()
    } else {
      this.initialRender = false
    }
    return (
      <Layout>
        {this.state.loading ? (
          'Loading'
        ) : (
          <div>
            {this.rootComponent}
            {process.env.NODE_ENV === 'development' ? <ComponentDrop /> : null}
          </div>
        )}
      </Layout>
    )
  }
}

export default PageCraftor

export const query = graphql`
  query meta {
    allPagesMetaJson {
      edges {
        node {
          name
          ui
          pageTitle
          imports
          root {
            componentName
            props
            children
          }
          components {
            id
            componentName
            props
            children
          }
        }
      }
    }
  }
`
