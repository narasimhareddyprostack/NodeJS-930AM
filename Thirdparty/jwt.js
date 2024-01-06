const jwt = require('jsonwebtoken')

//payload
let user_login_payload={
    email:"rahul@gmail.com",
    password:"123455"
}

let token=jwt.sign(user_login_payload,"abc768")

console.log(token)

let data=jwt.verify(token,"abc768")
console.log(data)