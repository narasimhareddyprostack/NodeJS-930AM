const fs = require('fs')
const path = require('path')

emp_file = path.join(__dirname,"f1","f2","f3",'emp.json')
//console.log(emp_file)
fs.readFile(emp_file,'utf-8',(err,data)=>{
    if(err) throw err
    fs.writeFile(path.join(__dirname,"user","user.json"), data,(err)=>{
        if(err) throw err 

        console.log("Created Successfully")
    })
})