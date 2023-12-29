const http = require('http')

let server=http.createServer((req,resp)=>{
    resp.end("Good Morning")
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 

    console.log(`Server is Running Successfully`)
})
