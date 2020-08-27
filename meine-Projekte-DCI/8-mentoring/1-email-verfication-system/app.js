const express = require('express')
const path = require('path')
const database = require('./modules/database')

const port = process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/register', (req, res) => {
    res.render('register')
});
app.post('/register', (req, res) => {
    console.log(req.body);
    const lname = req.body.lname
    const fname = req.body.fname
    const password = req.body.password
    const email = req.body.email

    if (fname.trim() && lname.trim() && password && email.trim()) {
        database.register(fname, lname, password, email).then(() => {
            res.json(1)
        }).catch(error => {
            res.json(2)
        })
    } else {
        res.json(2)
    }
});
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

// register page fiels
// first name
// last name
// password
// repassword
// email
// 
// users mongoose schema
// fname
// laname,
// password saved hashed
// email unique
// verefied Boolean