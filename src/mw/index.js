const fs = require('fs')
const path = require('path')

// Add Middleware Codecraftor api for
// reading and writing vdom to json files
module.exports = app => {
  app.get('/_cc/write', (req, res) => {
    // fs.writeFile(
    //   path.resolve('./src/json/page1.json'),
    //   `Boom Boom`,
    //   err => {
    //     console.log('boom boom written');
    //     if (err) {
    //       res.send(err)
    //     }
    //     count++
    //     res.send('File was saved to disk')
    //   }
    // )
  })
}
