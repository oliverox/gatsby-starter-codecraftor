const fs = require('fs')
const path = require('path')
const shortid = require('shortid')
const PAGES_META_DIR = './src/pagesMeta'

// Add Middleware Codecraftor api for
// reading and writing vdom to json files
module.exports = app => {
  app.get('/_cc/add', (req, res) => {
    const { page, target, componentName } = req.query
    const filename = `${PAGES_META_DIR}/${page}.json`
    let json = fs.readFileSync(path.resolve(filename))
    let meta = JSON.parse(json)
    const id = shortid.generate()
    const newComponent = {
      id,
      componentName,
    }
    meta.updated = Date.now()
    if (target === 'root') {
      meta.root.children.push(id)
      meta.components.push(newComponent)
    }
    fs.writeFile(path.resolve(`${filename}`), JSON.stringify(meta), err => {
      if (err) {
        res.send(err)
      }
      res.sendStatus(200)
    })
  })
}
