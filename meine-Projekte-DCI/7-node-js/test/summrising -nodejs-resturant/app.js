//1 exprss require
const express= require('express')
//2 app 
const app= express()
//3 files sestem erquire
const fs = require('fs')
//12 send E-mail from the web seit using contact fisrst step require the nodemailer
//secund step creat app.post for contact thin use urlencoder to parse the body
const nodemailer =require('nodemailer')
//use express url encoder
app.use(express.urlencoded({extended:true}))
// 4 set apuplic file (css,html,js)
app.use(express.static('./puplic'))
//5 set views engen im disis fals ist ejs 
app.set('view engine', 'ejs');
//6 set the views folder  we shold write the name fo the folder thin set the root with __dirname 
app.set('views',__dirname+'/views')

//8render the main page with rendering hte pages we write jst the name of ejs folder

app.get('/', (req, res) => {
    res.render('main')
});

//9 render menu page
app.get('/menu',(req,res)=>{
    res.render('menu')
})

//10 render contact page 
app.get('/contact',(req,res)=>{
    res.render('contact')
})
//13 app.post for send an email from the web seit 
app.post('/contact', (req, res) => {
    console.log(req.body);
     const transporter = nodemailer.createTransport({
         service:'gmail',
         auth:{
             user:'bs395280@gmail.com',
             pass:''
         }
     })
     const mailOption ={
        from:req.body.email,
        to:'bs395280@gmail.com',
        subject:req.body.subject,
        text:req.body.name +'\n'+ req.body.message
     }

     transporter.sendMail(mailOption,function(error,info){
        if(error){
            console.log(error)
        } else {
            console.log(info.response)
        }
    
  })
}); 
//11 we sholde new file (partial) creating  inseid this folder html header  und js file  to shared with all pages usin  <%-include('foldername/filename')%>

//7 set the app listner
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

