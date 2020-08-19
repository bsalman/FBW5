const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const dataModule =require('./modules/mongooseDataModules')

app.get('/',(req,res)=>{
    res.render('main')
   
})
app.post('/register',(req,res)=>{
    console.log(req.body);
    const name= req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const rePassword= req.body.rePassword
    
})
app.listen(5360, () => {
    console.log('App listening on port 5360!');
});