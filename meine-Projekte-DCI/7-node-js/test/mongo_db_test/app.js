const express =require('express');
const {MongoClient,ObjectID}=require('mongodb')
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.jufz4.mongodb.net/test1?retryWrites=true&w=majority'
const app = express()

app.get ('/',(req,res)=>{
  console.log(MongoClient);
  res.send('hallo')
})
 
app.listen(4500,()=>{
    console.log('App listening on port 4500!');
    
})
