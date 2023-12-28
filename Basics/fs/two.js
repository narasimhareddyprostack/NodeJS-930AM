import fs from 'fs'

fs.readFile("abcd.txt",'utf-8', (err,data)=>{
    if(err) throw err 
    console.log(data)
    
})