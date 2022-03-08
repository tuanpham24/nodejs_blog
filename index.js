const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  const text = 'My string'

  res.send('Hello World!')
})

// 127.0.0.2 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})