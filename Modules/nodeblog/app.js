const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello NODE.JS')
})
server.listen(port, hostname, ()=>{
    console.log(`Server çalısıyor, http://${hostname}:${port}/`)
})