import fs from 'fs'

fs.readFile('data.json', 'utf-8',(err,data)=>{
     if(err) throw err 

     console.log(typeof data)
      fs.writeFile('user.json',data,(err)=>{
        if(err) throw err 
        console.log("Written success")
      })
})