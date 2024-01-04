/* import http from 'http'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import morgan from 'morgan' */
const http =require('http')
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config({path:'./config/dev.config'})
let port = process.env.PORT 
let host= process.env.HOST
let server = http.createServer((req,resp)=>{
    if(req.url==="/index" || req.url==="/"){
            //read index.html  file
            fs.readFile("static/views/index.html", 'utf-8',(err,data)=>{
                if(err) throw err 
                resp.end(data)
            })
    }
    if(req.url==="/services"){
         fs.readFile(path.join(__dirname,"static","views",'services.html'),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
           })
    }
    if(req.url==="/about"){
           fs.readFile(path.join(__dirname,"static","views",'about.html'),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
           })
    }
    if(req.url==="/contact"){
             fs.readFile(path.join(__dirname,"static","views",'contact.html'),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
           })
    }
})

server.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server running on : http://${host}:${port}`)
})