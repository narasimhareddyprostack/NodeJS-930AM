import express from 'express'
import fs from 'fs'
//create express app
let app = express()

//read data from - form body
app.use(express.json());
//Root Request
/*
API URL: 127.0.0.1:8080/
*/
app.get("/",(req,resp)=>{
    resp.send({"msg":"Home Page"})
})

//Create employe
app.post("/create",(req,resp)=>{
    let emp=req.body

    let employees=getEmployees()
    //verify emp exit of not
    let exits=employees.find((employee)=>{ return employee.ename ==emp.ename })
    if(exits){
        return resp.send({"msg":"Employee Alread exists"})
    }
    //if not exists add emplyee into employees array
    employees.push(emp)

    saveEmployees(employees)
    
    resp.status(200).send({"msg":"New Employee added Successfully"})

})
//Read employee
app.get("/read",(req,resp)=>{
    let employees=getEmployees()
    resp.status(200).send(employees)
})
//Update employee
app.put("/update/:id",(req,resp)=>{
    let eid = req.params.id 
    let emp = req.body
    //verify emplyee is exist or not 
    let existingEmpl=getEmployees()
    let flag =existingEmpl.find((empl)=>{
        return empl.eid ==eid
    })
    console.log(flag)
    if(!flag){
        return resp.send({"Error":"Employee not exits"})
    }
    let employees=existingEmpl.filter((empl)=>{
       return empl.eid !=eid
    })
    console.log(employees)
    employees.push(emp)
    saveEmployees(employees)
    
    resp.status(200).send({"msg":"updated Successfully"})

})
//Delete employee
app.delete("/delete/:id", (req,resp)=>{})

let getEmployees=()=>{
    let employees=fs.readFileSync('emp.json','utf-8')
    console.log(typeof employees)
    return JSON.parse(employees)
}

let  saveEmployees= (employees)=>{
    fs.writeFile('emp.json', JSON.stringify(employees),(err)=>{
        if(err) throw err
    })
}
app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running on : 8080`)
})

