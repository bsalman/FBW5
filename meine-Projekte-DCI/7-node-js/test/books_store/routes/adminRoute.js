const express = require ('express')
const daminRouter = express.Router()
const dataModule= require('../module/dataModule')
daminRouter.get('/',(req,res)=>{
    res.render('admin')
})
daminRouter.get('/addBook',(req,res)=>{
    res.render('addBooks')
})
daminRouter.post('/addBooks',(req,res)=>{

     // responses map
    // 1 book saved successfuly
    // 2 data error
//console.log(req.body);
//console.log(Object.keys( req.files));
if (req.files) {
    

    console.log(req.body);
    console.log(req.files);
    const bookTitle=req.body.bookTitle
    const bookDescription=req.body.bookDescription
    const bookPdf = req.files.bookPdf
    if (bookTitle && bookDescription && bookPdf && Object.keys( req.files).length > 1){
    const imgs= []
    for (const key in req.files) {
        if (req.files[key].mimetype!='application/pdf') {
            imgs.push(req.files[key])
            
        }
    }
    
    //hier we shold add som validatin condetiones 

    dataModule.addNewBooks(bookTitle,bookDescription,imgs,bookPdf).then(()=>{
        res.json(1)
    }).catch(error=>{
        console.log(error);
        if (error==3) {res.json(3)}
            
    })
 
}else{res.json(2)}

}else{res.json(2)}
})


module.exports = daminRouter