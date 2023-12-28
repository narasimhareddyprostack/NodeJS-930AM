import fs from 'fs'

let data=fs.readFileSync("abc.txt","utf-8")
console.log(data)