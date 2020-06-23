const fs = require('fs')

const jsonText = fs.readFileSync('./users.json')
// change the data inside json file to object
const users = JSON.parse(jsonText)
function registerUser(email,password){
return new Promise((resolve,reject)=>{
    const readData = fs.readFileSync('./users.json')
    const data =JSON.parse(readData)
    const existUser = data.users.find(user=>user.email==email)
    if (existUser) {
        reject('exist')  
    }else{
        data.users.push({
            id:data.newId,
            email:email,
            password:password
        })
        //increas the number of id for data to be used for next register
        data.newId++
        //convert data to json and writed 
        fs.writeFileSync('./users.json',JSON.stringify(data))
    }
    
})
    
}
module.exports = { registerUser }