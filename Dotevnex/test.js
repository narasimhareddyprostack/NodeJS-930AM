const dotenv = require('dotenv')

dotenv.config({path:'./config/.config'})

let port =process.env.PORT
let password = process.env.Secret_Key

console.log(port)
console.log(password)