const express = require('express');
// const emailSender = require('./modules/emailSender')
const fs = require('fs')
// const adminRoute = require('./routs/adminRoute')
const fileupload = require('express-fileupload')
const session = require('express-session')
//create cookie
// const cookie = require('cookie-parser')
const app = express();

const sessionOption ={
    secret:'books store',
    cookie:{
      
    }
}//8

app.set('view engine', 'ejs');//1

app.set('views',__dirname + '/views');//2

//use the session 
app.use(session (sessionOption));//9
// app.use(cookie())//10

// set fileupload middleware
app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))//11

app.use(express.static('./public'));//4
app.use(express.urlencoded({extended: false}));//6
// use express.json() to get posted json data and converted to object inside the body
app.use(express.json())//7
const dataModule= require('/')



app.get('/', (req, res) => {
    res.render('main');
});//3

app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register',(req,res)=>{
    console.log(req.body);
    const password = req.body.password
    const email = req.body.email
    const rePassword = req.body.rePassword
   
     if(email&&password&&password==rePassword){
       dataModule.registerUser(email,password).then(()=>{
           res.json(1)
       }).catch(error=>{
           console.log(error);
           if (error=='exist') {
               res.json(3)
           }else{
            res.json(4)
           }
           
       }
       )
    }else{
        res.json(2)
    }
    
});

app.get('/shop', (req, res) => {
    res.render('shop');
});

app.get('/login', (req, res) => {
    res.render('login');
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});//5