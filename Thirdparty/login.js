const bcrypt = require('bcrypt')
let user = {
    email:"rahul@gmail.com",
    password:"123india",
    mobile:9591619192
}
console.log(user)
let new_Password=bcrypt.hashSync(user.password,10)
user={...user,password:new_Password}

console.log(user)
//login details 
let login_Password = '123india'
let flag = bcrypt.compareSync(login_Password,user.password)

if(flag){
    console.log("Login success")
}
else{
    console.log("Login Fail")
}