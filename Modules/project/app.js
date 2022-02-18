// EXPRESS kullanarak
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use(express.static('public'))


app.listen(port, hostname,() => {
  console.log(`Server çalısıyor, http://${hostname}:${port}/`)
})

