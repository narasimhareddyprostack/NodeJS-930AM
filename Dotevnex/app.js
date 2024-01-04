const http =require('http')
const dotenv = require('dotenv')
//let server = http.createServer()
dotenv.config({path:'./config/.config'})

let port = dotenv.process.PORT
console.log(port)
//server.listen()