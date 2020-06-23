//=====================declaration area_start============//
const express = require ('express')
const app =express()
//=====================declaration end============//

//=====================express_use_set_area_start============//
app.use(express.static('./public'))
app.use(express.json())
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
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
    
})

//===================== express_get_post_area_end============//

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});