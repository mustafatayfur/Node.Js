const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, hostname,() => {
  console.log(`Server çalısıyor, http://${hostname}:${port}/`)
})

// const http = require('http')
// const fs = require('fs')

// const hostname = '127.0.0.1'
// const port = 3000

// const indexPage = fs.readFileSync('index.html')
// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const notFoundPage = fs.readFileSync('404.html')

// // const server = http.createServer((req, res)=>{
// //     console.log(req.url)
// //     res.statusCode = 200
// //     res.setHeader('Content-Type', 'text/plain')
// //     res.end('Hello NODE.JS')
// // })
// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         return res.end(indexPage)
//     } else if (req.url === '/about'){
//         return res.end(aboutPage)
//     } else if (req.url === '/contact'){
//         return res.end(contactPage)
//     }else {
//         res.statusCode = 404
//         res.end(notFoundPage)
//     }
// })
// server.listen(port, hostname, ()=>{
//     console.log(`Server çalısıyor, http://${hostname}:${port}/`)
// })