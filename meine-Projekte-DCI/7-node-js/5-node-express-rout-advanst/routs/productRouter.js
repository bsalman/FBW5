const express =require('express');
const productRouter= express.Router();

productRouter.get('/',(req,res)=>{
    res.send('welcom products');
});

productRouter.get('/subProduct',(req,res)=>{
    res.send('welcom in sub Product ');
})

module.exports=productRouter;