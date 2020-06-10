const express =require('express');
const homeRouter= express.Router();

homeRouter.get('/',(req,res)=>{
    res.send('welcom home');
});

homeRouter.get('/subhome',(req,res)=>{
    res.send('welcom in subhome ');
})

module.exports= homeRouter;