const express = require('express')
const fs = require('fs')
const dataModule = require('../modules/dataModule')
const { resolve } = require('path')
const { rejects } = require('assert')

    const adminRoute = express.Router()
    adminRoute.get('/', (req, res) => {
        res.render('admin')
    })
    adminRoute.get('/addBook',(req,res)=>{
        res.render('addBook')
    })
    adminRoute.post('/addBook',(req,res)=>{
        console.log(req.body);
        console.log(req.files);
        console.log(Object.keys(req.files));
       const bookTitle= req.body.bookTitle
       const bookDescription=req.body.bookDescription;
       const bookPdf = req.files.bookPdf;
        if (bookTitle&&bookDescription&&bookPdf&&Object.keys(req.files).length>1) {
            const imgs=[]
            for (const key in req.files) {
                if (req.files[key].mimetype !='application/pdf') {
                    imgs.push(req.files[key]); 
                }
            }
            dataModule.addBook(bookTitle,bookDescription,bookPdf,imgs).then(()=>{
                res.json(1)
            })
        }else{
            res.json(2)
        }
        
    })


module.exports = adminRoute