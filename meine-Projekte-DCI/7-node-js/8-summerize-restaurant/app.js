const express = require('express');
const emailSender = require('./modules/emailSender')
const fs = require('fs')
const adminRoute = require('./routs/adminRoute')
const fileupload = require('express-fileupload')
const session = require('express-session')
const cookie = require('cookie-parser')


const app = express();

// create session object options
const sessionOptions = {
    secret: 'burger',
    cookie: {}
}
// use a session
app.use(session(sessionOptions))

// use cookie parser
app.use(cookie())

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
app.get('/login', (req, res) => {
    // check saved cookies in req
    console.log(req.cookies);
    if (req.cookies.burgerUser){
        const jsonText = fs.readFileSync(__dirname + '/users.json')
        const users = JSON.parse(jsonText)
        const foundUser = users.find(user => user.username == req.cookies.burgerUser.username &&
             user.password == req.cookies.burgerUser.password)
        if (foundUser){
            req.session.user = foundUser
            res.redirect('/admin')
        } else {
            res.render('login')
        }
    } else {
        res.render('login')
    }
    
    
});
app.get('/logout', (req, res) => {
    // destroy the session and log out
    req.session.destroy()
    // clear cookie on logout
    res.clearCookie('burgerUser')
    res.redirect('/')
});

app.post('/login', (req, res) => {
    // code here
    //console.log(req.session)
    const jsonText = fs.readFileSync(__dirname + '/users.json')
    const users = JSON.parse(jsonText)
    //console.log(users)

    // using for loop
    // let check = false
    // for (let i = 0; i < users.length; i++) {
    //     if (req.body.userName == users[i].username && req.body.password == users[i].password){
    //         check = true
    //         break;
    //     }
        
    // }
    // if (check){
    //     res.json("exist")
    // } else {
    //     res.json('notexisit')
    // }

    // using es6 array find
    const foundUser = users.find(user => user.username == req.body.userName && user.password == req.body.password)
    if (foundUser){
        req.session.user = foundUser
        // set burgerUser Cookie to use it on login page next time
        //res.cookie("burgerUser", foundUser, {maxAge: 60000})
        res.cookie("burgerUser", foundUser, {maxAge: 6000000, httpOnly: true})

        res.json("exist")
        
    } else {
        res.json('notexisit')
    }

});

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
// get meal using id
// app.get('/meal/:id', (req, res) => {
//     //res.send(req.params.id);
//     const idx = req.params.id
//     if (myMeals[idx]){
//     res.render('meal', {
//         mealTitle: myMeals[idx].title,
//         mealPrice: myMeals[idx].price,
//         mealDescription: myMeals[idx].description,
//         mealImg: myMeals[idx].imgUrl
//     })
// } else {
//     res.send("dont dont dont");
// }
// });

// get meal using title
app.get('/meal/:title', (req, res) => {
    //res.send(req.params.id);
    const mealtitle = req.params.title
    const foundMeal = myMeals.find(meal => meal.title.trim().replace(/ /g, '_') == mealtitle)
    if (foundMeal){
    res.render('meal', {
        mealTitle: foundMeal.title,
        mealPrice: foundMeal.price,
        mealDescription: foundMeal.description,
        mealImg: foundMeal.imgUrl,
        mealDetails: foundMeal.details
    })
} else {
    res.send("dont dont dont");
}
});

app.listen(5000, () => {
    console.log('App listening on port 3000!');
});