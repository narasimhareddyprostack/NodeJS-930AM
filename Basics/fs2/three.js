import fs from 'fs'
import { json } from 'stream/consumers'

fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err 

    let employees_Obj=JSON.parse(data)
    console.log(typeof employees_Obj)
    console.log(employees_Obj)
    
   for(let i=0;i<=employees_Obj.length-1;i++){
    console.log(employees_Obj[i].name)
   }
})