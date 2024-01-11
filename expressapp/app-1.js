const express = require('express')
let app = express()

/*
API URL: 127.0.0.1:8080/
Method Type:GET
Req Field:No
Access Type:Public
*/
app.get("/",(req,resp)=>{
    resp.send("Home Page")
})
/*
API URL: 127.0.0.1:8080/about
Method Type:GET
Req Field:No
Access Type:Public
*/
app.get("/about",(req,resp)=>{
    console.log(req.url)
    console.log(req.baseUrl)
    resp.send("About Page")
})

/*
API URL: 127.0.0.1:8080/services
Method Type:GET
Req Field:No
Access Type:Public
*/
app.get("/services",(req,resp)=>{
    resp.send("Service Page")
})

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running on ....`)
})