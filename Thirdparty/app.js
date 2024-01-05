const bcrypt = require('bcrypt')
let user={
    userName:"Rahul Gandhi",
    email:"rg@pm.com",
    password:'iloveindia',
    cc:'4455667788991122',
    cvv:'123'   
}

let new_Password=bcrypt.hashSync(user.password,1)
let new_CC=bcrypt.hashSync(user.cc,1)

console.log(user.password)
console.log(new_Password)
console.log(user.cc)
console.log(new_CC)