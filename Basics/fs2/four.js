import fs from 'fs'
import { json } from 'stream/consumers'

fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err 
    let employees=JSON.parse(data);
    employees.map((emp)=>{
        console.log(emp.id)
    })
})