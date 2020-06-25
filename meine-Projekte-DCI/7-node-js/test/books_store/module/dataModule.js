const fs = require('fs');
//this is the fis part of Promise the secound part is in app.post(/regester)
function registerUser(email,password) {
    return new Promise((resolve,reject)=>{
        const jsonText = fs.readFileSync('./users.json');
        const dataUsers = JSON.parse(jsonText) 
        const existUser = dataUsers.users.find(user=>user.email== email)
        if (existUser) {
            reject('exist')
        }else{
            resolve('notexist')
            dataUsers.users.push({
                id:dataUsers.newId,
                email:email,
                password:password
            })
            dataUsers.newId++
            fs.writeFileSync('./users.json',JSON.stringify(dataUsers))
        }

    })
    
    
}
