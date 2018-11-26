const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'components'],
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === 'File' &&
    node.sourceInstanceName === 'pagesJson'
  ) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log('> Creating slug field for node:', node.name)
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const filtered = result.data.allFile.edges.filter(
        ({ node }) => node.fields && node.fields.slug
      )
      filtered.forEach(({ node }) => {
        console.log('> Creating page:', node.fields.slug)
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blank-page.js'),
          context: { slug: node.fields.slug },
        })
      })
      resolve()
    })
  })
}
