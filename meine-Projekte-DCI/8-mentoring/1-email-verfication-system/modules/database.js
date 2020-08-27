const connectionString = 'mongodb+srv://test2_user:!234qweR@cluster0-rmrmn.mongodb.net/test2?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const passwordHash = require('password-hash')
const emailSender = require('./emailSender')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    fname: {
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    lname: {
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    password: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 100,
        min: 5
    },
    verfied: {
        type: Boolean,
        required: true
    }
})
const Users = mongoose.model('users', usersSchema)

function connect() {
    return new Promise((resolve, reject) => {
        if(mongoose.connection.readyState === 1) {
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

function register(fname, lname, password, email) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const newUser = new Users({
                fname,
                lname,
                password: passwordHash.generate(password),
                email,
                verfied: false
            })
            newUser.save().then(() => {
                // emaial message :
                // welcome to our website. to verify your email click the following link
                // http://localhost:3000/verify/[newUser._id]
                // in Heroku
                // https://ahmad-emailverfication.herokuapp.com/verify/[newUser._id]
                let message = 'Hi ' + fname + ' ' + lname + 'Welcome to our Website\n'
                message += 'to verify you email address please click in the following link\n'
                message += 'https://ahmad-emailverfication.herokuapp.com/verify/' + newUser._id
                emailSender.sendEmail(email, 'Verify Email', message).then(() => {
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

module.exports = {
    register
}