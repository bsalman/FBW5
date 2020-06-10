const express=require('express');
const bodyParser= require('body-parser')
const app = express();
//set body parser middlware
app.use(bodyParser.urlencoded({extended:true}))
//rout / root of the domain
app.get('/',(req,res)=>{
    // res.send("Hello FWBS")
    res.sendFile (__dirname +'/home.html')
})
app.post('/',(req,res)=>{
    console.log(req.body);
    
   if (req.body.username=='bsalman'&& req.body.password=='1234') {
       
    res.send("this is the reight logen ")
   } else {
       res.send("this is rong login ")
   }
    
})
//route/about
app.get('/about',(req,res)=>{
    res.send('About me');
})
app.get('/contact',(req,res)=>{
    res.send('contact me');
})
app.get('/test',(req,res)=>{
    console.log(req)
    res.json('test');
})

app.listen(3000,()=>{
    console.log('App listening on port 3000')
})