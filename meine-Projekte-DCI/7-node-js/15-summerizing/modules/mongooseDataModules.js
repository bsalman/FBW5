const passwordHash = require('password-hash')
const fs = require('fs')
const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://user1:Rbt6CCjKCHdYYwfe@cluster0.jufz4.mongodb.net/test1?retryWrites=true&w=majority'
const {
    Schema
} = mongoose
const usersSchema = new Schema({
    name:{
        type: String,
        required: true,
       

    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})

const Users = mongoose.model('users', usersSchema)

function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject()
            })
        }

    })
}
function registerUser(name,email, password) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const newUser = new Users({
                name:name,
                email: email,
                password: passwordHash.generate(password),
            })
            newUser.save().then(result => {
                console.log(result);
                resolve(result)
            }).catch(error => {
                console.log(error);
                if (error.code === 11000) {
                    reject('exist');
                } else {
                    reject(error);
                }

            })
        }).catch(error => {
            reject(error)
        })
    })
}

module.exports={
    registerUser
}