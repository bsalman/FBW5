//=====================declaration area_start============//
const express = require ('express')

const fileupload = require('express-fileupload')

const dataModule = require('./module/dataModule')

const app =express()

const daminRouter = require('./routes/adminRoute')

//=====================declaration end============//

//=====================express_use_set_area_start============//
app.use(express.static('./public'))
app.use(express.json())
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.urlencoded({extended: false}))

app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))
app.use('/admin',daminRouter);
//===================== express_use_set_area_end============//
//===================== express_get_post_area_start============//
app.get('/',(req,res)=>{
    res.render('main')
})
//=============//
app.get('/shop',(req,res)=>{
    res.render('shop')
})
//============//
app.get('/login',(req,res)=>{
    res.render('login')
})
//===========//
app.get('/register',(req,res)=>{
    res.render('register')
})
app.post('/register',(req,res)=>{
    console.log(req.body);
      // 2 data error
    // 1 user registered successfuly
    // 3 user is exist
    // 4 server error
    const email = req.body.email.trim()
    const password = req.body.password
    const repassword = req.body.repassword
    if (email && password && password == repassword){
        dataModule.registerUser(email, password).then(() => {
            res.json(1)
        }).catch(error => {
            console.log(error);
            if (error == "exist") {
                res.json(3)
            } else {
                res.json(4)
            }
        })
    } else{
            res.json(2)
        }

    // if (email&&password&&rePassword==password){}    
})
//======================//
// app.get('/admin',(req,res)=>{
//     res.render('admin')
// })
// //===================== express_get_post_area_end============//

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});