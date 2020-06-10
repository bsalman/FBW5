const express = require('express')

const app =express();

app.use(express.static('./puplic'));

app.get('/', (req, res) => {
    res.send('hallo');
});
 
app.get('/home',(req,res)=>{
    //static root
    res.sendFile(__dirname+'/index.html')
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});