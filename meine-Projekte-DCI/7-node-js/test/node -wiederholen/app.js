const http = require('http');
const fs =require('fs')
const url= require('url')
const saver = require('./modules/saver')


http.createServer(function(req,res){
    
    

let urlObj = url.parse(req.url,true)

console.log(urlObj.query);


switch (urlObj.pathname) {
    case '/': 
    let mainHtml =fs.readFileSync('views/index.html')
    res.writeHead(200,{'content-type':'text/html'})
       
        res.end(mainHtml)
        
        break;
    case'/contact':
     if (urlObj.query.name) {
         let message = urlObj.query.name+`\n`+urlObj.query.subject+`\n`+urlObj.query.message +`\n`
         saver.saveContent(message,'content.txt')

         
     }

        res.writeHead(200,{'content-type':'text/html'})
        let conatctHtml=fs.readFileSync('views/contact.html')    
        res.end(conatctHtml)

        break;
    case'/css/index.css':
        let cssFile=fs.readFileSync('views/css/index.css')
        res.writeHead(200,{'content-type':'text/css'})
        res.end(cssFile)
        break;
    case'/img/logo.png':
        let loImg =fs.readFileSync('views/img/Logo.png');
        res.writeHead(200,{'content-type':'image/png'});
        res.end(loImg)
        break;
    case'/img/hero.jpg':
        let panerImg =fs.readFileSync('views/img/hero.jpg');
        res.writeHead(200,{'content-type':'image/jpg'});
        res.end(panerImg)
        break;

    default:
        res.writeHead(404,{'content-type':'text/plain'})
        break;
}







}).listen(6235)