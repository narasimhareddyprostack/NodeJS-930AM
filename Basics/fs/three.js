import fs from 'fs'
//read file and write into new file.

fs.readFile("abc.txt","utf-8",(err,data)=>{
    if (err ) throw err 

    fs.writeFile("bng.txt",data,(err)=>{
        if(err) throw err 
        console.log("Created successfully")
    })
})