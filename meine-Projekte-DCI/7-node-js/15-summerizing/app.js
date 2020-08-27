const express = require('express')
const path = require('path')

const mongoose = require('mongoose')
const passwordHash = require('password-hash')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
const User = mongoose.model('users', userSchema)
const app = express()

// create a function to connect to db
function dbConnect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState !== 1) {
            mongoose.connect(connectionString, {
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        } else {
            resolve()
        }
    })
    
}
// user url parserfrom express (before we needed to install body-parser)
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// set the public folder url 
app.use(express.static(path.join(__dirname, 'public')))

// set view engine and views path
app.set('view engine', 'ejs')
app.set('views', 'views');


const connectionString = 'mongodb+srv://fbw5_user:1234qweR@cluster0-rmrmn.mongodb.net/db1?retryWrites=true&w=majority'


app.get('/', (req, res) => {
    //res.send('Hello World');
    //res.send('Hi again');
    res.render('register');
});
app.post('/register', (req, res) => {
    console.log(req.body);
    //res.send('we will save this data to database');
    dbConnect().then(() => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: passwordHash.generate(req.body.password)
        })
        user.save().then(() => {
            res.send('user register successfuly');
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message);
    })
    
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

// client side validation
// all inputs are filled
// password must match the repassword
// user must check the term of services check box
// if any of these roles is not valid, alert should be shown with the error message