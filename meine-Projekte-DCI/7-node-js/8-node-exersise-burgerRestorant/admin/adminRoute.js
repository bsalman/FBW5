const express=require('express')
const fs = require('fs')


// const jsontext=fs.readFileSync('./meals.json')
// const myMeals = JSON.parse(jsontext)
function adminBurgerRouter(myMeals) {
    const adminRout=express.Router()
    adminRout.get('/addmeal',(req,res) =>{
        //  const jsontext=fs.readFileSync(__dirname+'/meals.json')
        // const myMeals = JSON.parse(jsontext)
        res.render('adminAddMeal',{meals:myMeals});
    });
    
    
    adminRout.post('/addmeal',(req,res) =>{
        // const jsontext=fs.readFileSync(__dirname+'/meals.json')
        // const myMeals = JSON.parse(jsontext)
    const mealTitle= req.body.mealTitle
    const mealPrice= req.body.mealPrice
    const mealDescription= req.body.mealDescription
    let obj={ 
              title:  mealTitle,
              description: mealDescription,
              imgUrl: "/img/burger/5.png",
              price: mealPrice
    }
     myMeals.push(obj)
     console.log(myMeals);
     
    fs.writeFile('./meals.json', JSON.stringify(myMeals),function(err){
        console,log(err)
     })
    res.redirect('/admin/addmeal');
        
    });
    
    ///delet meal
    //  const jsontext=fs.readFileSync(__dirname+'/meals.json')
    //     const myMeals = JSON.parse(jsontext)
    adminRout.get('/deletmeal',(req,res)=>{
       
        res.render('admindeletMeal',{meals:myMeals})
    })
   return adminRout
}

 module.exports = {adminBurgerRouter}