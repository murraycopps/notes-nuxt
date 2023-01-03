const express = require('express')
const app = express()

const notes = require('./notes')
app.use(notes)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app