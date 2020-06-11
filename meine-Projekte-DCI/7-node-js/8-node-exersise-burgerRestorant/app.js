const express = require('express')

const fileUpload =require('express-fileupload')

const app =express();

const emailSender =require('./modules/emailsender')

const adminRoute = require('./admin/adminRoute')
const fs = require('fs')


const jsontext=fs.readFileSync(__dirname+'/meals.json')
const myMeals = JSON.parse(jsontext)

// use express urlencoder to get posted data
app.use(express.urlencoded({ extended: true }));

// use a puplic folder for css js  font
app.use(express.static('./puplic'));
//set filuploade
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));
//set view engin ejs  
app.set('view engine','ejs');
//set the view folder
app.set('views',__dirname+'/views')

app.use('/admin',adminRoute.adminBurgerRouter(myMeals));
// rendering the ejs file with is the same of htmlfile 
app.get('/',(req,res) =>{
    res.render('main');
});

//app.use('/admin',adminRoute);
//rendering the ejs menu pa
 
app.get('/menu',(req,res) =>{
    
    res.render('menu',{meals:myMeals});
});

// const jsontext=fs.readFileSync(__dirname+'/meals.json')
// const myMeals = JSON.parse(jsontext)



 
//contact file rendering 
app.get('/contact',(req,res) =>{


    res.render('contact',{sent:1});
});
//
// app.post('/contact',(req,res)=>{
//     console.log(req.body);
//     const name =req.body.name;
//     const email =req.body.email;
//     const subject =req.body.subject;
//     const message =req.body.message;
//     if(name !=""&& name.length<100){
//         emailSender.sendEmail(name,email,subject,message,(ok)=>{
//             if(ok){res.sendStatus(200)}
//             else{
//                 res.sendStatus(500)
//             }
        
            
//         })
//     }


// })
app.post('/contact1',(req,res)=>{
    console.log(req.body);
    const name =req.body.name;
    const email =req.body.email;
    const subject =req.body.subject;
    const message =req.body.message;
    if(name !=""&& name.length<100){
        emailSender.sendEmail(name,email,subject,message,(ok)=>{
            if(ok){
                // res.sendStatus(200)
            res.render('contact',{ sent:2} )}
            else{
                // res.sendStatus(500)
                res.render('contact', {sent:3})

            }
        
            
        })
    }


})




app.listen(3000, () => {
    console.log('App listening on port 3000!')
})