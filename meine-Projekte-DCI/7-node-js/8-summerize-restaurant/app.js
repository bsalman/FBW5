const express = require('express');
const emailSender = require('./modules/emailSender')
const fs = require('fs')
const adminRoute = require('./routs/adminRoute')
const fileupload = require('express-fileupload')
const session = require('express-session')
//create cookie
const cookie = require('cookie-parser')
const app = express();
//create session object optiones
const sessionOption ={
    secret:'burger',
    cookie:{
      
    }
}
//use the session 
app.use(session (sessionOption));
//use cookie parser
app.use(cookie())
// set fileupload middleware
app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))
// use express urlencoder to get posted data
app.use(express.urlencoded({extended: false}));
// use express.json() to get posted json data and converted to object inside the body
app.use(express.json())
// use express to set public file 
app.use(express.static('./public'));
// set ejs as view engine 
app.set('view engine', 'ejs');
// set views file as file for ejs 
app.set('views',__dirname + '/views');
// rendering main file  as main page  
app.get('/', (req, res) => {
    res.render('main');
});
// reading json file using fs to get the adta from this file 
const jsonText = fs.readFileSync(__dirname + '/meals.json')
// change the data inside json file to object
const myMeals = JSON.parse(jsonText)
// admin route as sub route 
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
//============== login start==============================//
app.get('/login',(req,res)=>{
    //check saved cookies in req
    console.log(req.cookies);
    if (req.cookies.burgerUser) {
        const jsonText=fs.readFileSync(__dirname+'/users.json')
        const users = JSON.parse(jsonText)
        const foundUser= users.find(user=>user.username==req.cookies.burgerUser.username && user.password==req.cookies.burgerUser.password)
        if (foundUser) {
            req.session.user=foundUser
            res.redirect('/admin')
        }else{
            res.render('login')
        }

    }else{
        res.render('login')
    }
    
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    const jsonText=fs.readFileSync(__dirname+'/users.json')
    
    const users = JSON.parse(jsonText)
    console.log(sessionOption);
    // let check= false
    // for (let i = 0; i < users.length; i++) {
    //    if (req.body.userName ==users[i].username&& req.body.Password==users[i].password) {
    //        check= true;
    //        break
    //    }
    // }
    // if (check) {
    //     res.json("exist")
        
    // }else{
    //     res.json('notexist')
    // }
    const foundUser= users.find(user=>user.username==req.body.username && user.password==req.body.Password)
      if (foundUser) {
          req.session.user=foundUser
          // saving the cookies
          res.cookie("burgerUser",foundUser,{maxAge:600000,httpOnly:true})
     res.json("exist")  
     }else{
       res.json('notexist')
    }
})
//============== login end==============================//
//============== logout start==============================//
 app.get('/logout',(req,res)=>{
     //destroy the session and logout 
     req.session.destroy()
     //clear cookie on logout
     res.clearCookie('burgerUser')
     res.redirect('/')
 })
 //============== logout end==============================//

 //===================== menu start=====================//
app.get('/menu', (req, res) => {
    // const jsonText = fs.readFileSync(__dirname + '/meals.json')
    // const myMeals = JSON.parse(jsonText)
    res.render('menu', {meals: myMeals})
});
//============== menu end==============================//
//============== contact start==============================//
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
//============== contact end ==============================//
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
//============== logout end==============================//
//============== meal start==============================//
// app.get('/meal/:id',(req,res)=>{
//     // res.send(req.params.id)
//     const idx =req.params.id

//    if(myMeals[idx]){
//        res.render('meal',{
//                       mealTitle:myMeals[idx].title,
//                        mealPrice:myMeals[idx].price,
//                       mealImg:myMeals[idx].imgUrl,
//                       mealDescription:myMeals[idx].description})
//    }else{
//        res.send("you mother fucker don't play hier")
//    }

    
// })
app.get('/meal/:title',(req,res)=>{
    // res.send(req.params.id)
    const mealtitle =req.params.title
   
    const foundMeal = myMeals.find(meal=>meal.title.trim().replace(/ /g,'_')==mealtitle)
   if(foundMeal){
       res.render('meal',{
                      mealTitle:foundMeal.title,
                       mealPrice:foundMeal.price,
                      mealImg:foundMeal.imgUrl,
                      mealDescription:foundMeal.description})
   }else{
       res.send("you mother fucker don't play hier")
   }

    
})
//============== meal end==============================//
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});