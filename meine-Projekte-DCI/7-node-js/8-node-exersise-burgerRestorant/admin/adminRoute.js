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
    // 
    const mealImg=req.files.mealimg
     let ext =mealImg.name.substr(mealImg.name.lastIndexOf('.'))
    
    mealImg.mv('./puplic/uploadedfile/'+mealTitle.replace(/ /g,'_')+myMeals.length+ext).then(()=>{
            let obj={ 
                title:  mealTitle,
                description: mealDescription,
                imgUrl: "/uploadedfile/"+mealTitle.replace(/ /g,'_')+myMeals.length+ext,
                price: mealPrice
      }
       myMeals.push(obj)
      
       
      fs.writeFile('./meals.json', JSON.stringify(myMeals),function(err){
          console,log(err)
       })
        res.redirect('/addmeal')
         }).catch(error=>{
        console.log(error);
        res.send(error.message)})

   
    // res.redirect('/admin/addmeal');
        
    });
    
    
    
    ///delet meal
    //  const jsontext=fs.readFileSync(__dirname+'/meals.json')
    //     const myMeals = JSON.parse(jsontext)

    //delet rout
    adminRout.get('/deletmeal',(req,res)=>{
       
        res.render('admindeletMeal',{meals:myMeals})
    })

    adminRout.post('/deletmeal',(req,res)=>{
        // console.log(req.body.mealid);
        const idx =req.body.mealid
        myMeals.splice(idx,1)
        console.log(idx);
      // add new changes to meals.json
        fs.writeFile('./meals.json', JSON.stringify(myMeals),function(err){
            console,log(err)
         })


        res.sendStatus(200)
    })
    //end delet rout
////////////////Idet rout
    adminRout.get('/idetmeal',(req,res)=>{
       
        res.render('adminidetMeal',{meals:myMeals})
    })
    adminRout.post('/idetmeal',(req,res)=>{
        console.log(req.body);
        
res.sendStatus(200)
    })
////// end idet Rout
   return adminRout
}

 module.exports = {adminBurgerRouter}