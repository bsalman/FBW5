const fs = require('fs')
const jsonText = fs.readFileSync(__dirname + '/users.json')
// change the data inside json file to object
const users = JSON.parse(jsonText)
function registerUser(email,password){

    
}
module.exports = { registerUser }