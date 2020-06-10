const express= require('express')
const app= express()
//set apuplic file (css,html,js)
app.use(express.static('./puplic'))
app.get('/',(req,res)=>{

})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});