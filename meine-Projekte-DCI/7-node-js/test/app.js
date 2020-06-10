
exports.myDateTim =()=>{
    let date =  new Date();
    return date
}
const http = require('http')
const fs = require('fs')
const uDate =require('/myfirstmodule')
 http.createServer((req,res)=>{
     res.writeHead(200,{'Content-type':'application/json'});
     res.write("the date and time are uodatet:"+uDate.myDateTim())
     
     let obj ={
         name : 'bashar',
         lastname:'salman',
         address:'hamburg'
     }
     res.end(JSON.stringify(obj))
 }).listen(5236)