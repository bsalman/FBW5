const express = require('express');
const emailSender = require('./modules/emailSender')
const fs = require('fs')
const adminRoute = require('./routs/adminRoute')
const fileupload = require('express-fileupload')

const app = express();

// set fileupload middleware
app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))

// use express urlencoder to get posted data
app.use(express.urlencoded({extended: false}));
// use express.json() to get posted json data and converted to object inside the body
app.use(express.json())

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.get('/', (req, res) => {
    res.render('main');
});


// app.get('/home/subhome', (req, res) => {
//     res.render('main');
// });
const jsonText = fs.readFileSync(__dirname + '/meals.json')
const myMeals = JSON.parse(jsonText)

app.use('/admin',adminRoute.adminBurgerRouter(myMeals))

// app.get('/admin/addmeal', (req, res) => {
//     // const jsonText = fs.readFileSync(__dirname + '/meals.json')
//     // const myMeals = JSON.parse(jsonText)
//     res.render('adminAddMeal', {meals: myMeals})
// });

// app.get('/admin/deletmeal', (req, res) => {
//     res.render('adminDeletMeal', {meals: myMeals})
// });

// app.post('/admin/addmeal', (req, res) => {
//     const mealTitle = req.body.mealTitle
//     const mealPrice = req.body.mealPrice
//     const mealDescription = req.body.mealDescription

//     let obj = {
//         title: mealTitle,
//         description: mealDescription,
//         imgUrl: "/img/burger/4.png",
//         price: mealPrice
//     }
//     myMeals.push(obj)
//     fs.writeFileSync(__dirname + '/meals.json', JSON.stringify(myMeals))
//     //res.render('adminAddMeal', {meals: meals})
//     res.redirect('/admin/addmeal')

// });

app.get('/menu', (req, res) => {
    // const jsonText = fs.readFileSync(__dirname + '/meals.json')
    // const myMeals = JSON.parse(jsonText)
    res.render('menu', {meals: myMeals})
});
app.get('/contact', (req, res) => {
    res.render('contact', {sent: 1})
});
app.post('/contact', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if(name != "" && name.length < 100 ){
        emailSender.sendEmail(name, email, subject, message, (ok) => {
            if(ok){
                res.sendStatus(200);
            } else{
                res.sendStatus(500);
            }
        });
    }
    
   
});
app.post('/contact1', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if(name != "" && name.length < 100 ){
        emailSender.sendEmail(name, email, subject, message, (ok) => {
            if(ok){
                //res.sendStatus(200);
                res.render('contact', {sent: 2})
            } else{
                //res.sendStatus(500);
                res.render('contact', {sent: 3})
            }
        });
    }
    
   
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});