const express = require ('express');
const app =express();
//set view engin type
app.set('view engine', 'ejs');
//set the viewsfolder 
app.set('views', __dirname+'/views');

app.get('/',(req,res) =>{
    let arr =["banana","apple","wassermelone"]
    //using render with ejs
    res.render('main',{title:'main Page',frute:arr});

});
app.get('/contact',(req,res) =>{
    res.render('main',{title:'contact us',frute:[]});

});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});



