const express = require('express')
const morgan = require('morgan')
const path = require('path')
const chalk = require('chalk')
let app = express()

app.use(morgan('combined'))
app.use(express.static('public'))
//API URL: 127.0.0.1:8080/
app.get("/",(req,resp)=>{
    let file = path.join(__dirname,"public","index.html")
    console.log(file)
    resp.sendFile(file)
    //resp.send("Home Page")
})


app.get("/about",(req,resp)=>{
    console.log(req.url)
    console.log(req.baseUrl)
    resp.send("About Page")
})


app.get("/services",(req,resp)=>{
    resp.send("Service Page")
})

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(chalk.blue(`Service Running`))
})