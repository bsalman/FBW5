const express = require('express')
const fs = require('fs')

    const adminRoute = express.Router()
    adminRoute.get('/', (req, res) => {
        res.render('admin')
    })
    adminRoute.get('/addBook',(req,res)=>{
        res.render('addBook')
    })


module.exports = adminRoute