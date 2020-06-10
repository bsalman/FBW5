const express = require('express');
const app = express();

const homeRouter=require('./routs/homeRouter')

const productRouter= require('./routs/productRouter')

app.use('/home',homeRouter);

app.use('/product',productRouter);

app.get('/',(req,res)=>{
    res.send('hello')
});
// app.get('/home',(req,res)=>{
//     res.send('home')
// })

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});