const express = require ('express')
const daminRouter = express.Router()
daminRouter.get('/',(req,res)=>{
    res.render('admin')
})
daminRouter.get('/addBook',(req,res)=>{
    res.render('addBook')
})

module.exports = daminRouter