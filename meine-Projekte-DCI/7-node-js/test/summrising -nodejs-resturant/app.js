//1 exprss require
const express = require('express')
//2 app 
const app = express()
//3 files sestem erquire
const fs = require('fs')
//12 send E-mail from the web seit using contact fisrst step require the nodemailer
//secund step creat app.post for contact thin use urlencoder to parse the body
// therd step chech the send methode we can use ejax or fetch or normal send in aur casse we will make new module
//we will namet send Email.js
// const nodemailer =require('nodemailer')
const mailSnder = require('./module/mailSnder')
//declaren admin route to use it as subroute
const adminRoute = require('./routs/adminRoute')


//use express url encoder THIS IS THE BODYPARSER IN EXPRESS(this lien will stay in app.js) 
app.use(express.urlencoded({
    extended: true
}))
// 4 set apuplic file (css,html,js)
app.use(express.static('./puplic'))


//============= view _start=====================//
//5 set views engen im disis fals ist ejs 
app.set('view engine', 'ejs');
//6 set the views folder  we shold write the name fo the folder thin set the root with __dirname 
app.set('views', __dirname + '/views')

//============= view _end =====================//
//============= main _start=====================//
//8render the main page with rendering hte pages we write jst the name of ejs folder

app.get('/', (req, res) => {
    res.render('main')
});
//============= main _ end =====================//

//===========================   reading json file andparesd to Obj__start==================================//
//export json file and reading as text then change tha data to object becouse we need it inseid admin rout 
//step(1)
const jsonText = fs.readFileSync(__dirname + '/meals.json')


//step(2)
const myMeals = JSON.parse(jsonText)
console.log(myMeals);
//using adminRoute as subrout with function(parameter)
app.use('/admin', adminRoute.adminBurRouter(myMeals));
//=================================reading json file and paresd to Obj__end================================//

//============= menu _ start=====================//
//9 render menu page
app.get('/menu', (req, res) => {
    res.render('menu')
})
//============= contact _ end=====================//
//============= contact _start=====================//
//10 render contact page 
app.get('/contact', (req, res) => {
    res.render('contact')
});
//13 app.post for send an email from the web seit 
app.post('/contact', (req, res) => {
    console.log(req.body);

    const subject = req.body.subject
    const name = req.body.name;
    const message = req.body.message;
    const email = req.body.email
    // we shold inport  sendemail module with the function insid it to app.post contact
    //
    mailSnder.sendEmail(subject, name, message, email, (ok) => {
        if (ok) {
            //    res.sendStatus(200)
            res.render('contact', {
                send: 2
            })
        } else {
            //    res.sendStatus(500)
            res.render('contact', {
                send: 3
            })
        }

    })

    // if (name !='' && name.length<100 ) {}
});
//============= contact_end=====================//
//11 we sholde new file (partial) creating  inseid this folder html header  und js file  to shared with all pages usin  <%-include('foldername/filename')%>

//7 set the app listner
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});