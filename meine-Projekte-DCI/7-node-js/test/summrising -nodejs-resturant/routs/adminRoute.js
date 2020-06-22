const express = require('express');
const fs = require('fs')
function adminBurRouter(myMeals) {
      const adminRoute = express.Router()
    adminRoute.get('/', (req, res) => {
        res.render('admin')
    })

       //=========Add_meal_area_start===========//
    adminRoute.get('/addmeal', (req, res) => {
        res.render('adminAddmeal',{meals:myMeals})
    });
    //=========Add_meal_area_end===========//
}
  
 

//================export adminRoute to app.js===========//
module.exports = {
    adminBurRouter
}
    
