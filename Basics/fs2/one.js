let employees = [{id:101,name:"Rahul",sal:45000},
                 {id:102,name:"Sonia",sal:55000},
                 {id:103,name:"Priyanka",sal:65000}]

let emp_Str=JSON.stringify(employees)
let emp_Obj = JSON.parse(emp_Str)
console.log(typeof employees)
console.log(typeof emp_Str)
console.log(typeof emp_Obj)