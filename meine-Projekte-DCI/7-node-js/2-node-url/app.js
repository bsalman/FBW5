const http =require('http')
const fs =require('fs')
const url =require('url')
http.createServer((req,res)=>{
let urlObj=url.parse(req.url,true)
console.log(urlObj);


    switch(urlObj.pathname){
       
    case'/home':
    let sharedtext = fs.readFileSync('views/shared.html')
        res.writeHead(200,{'content-type': 'text/html'})
        let text= fs.readFileSync('views/index.html')
        res.end(text.toString().replace('this is shared content',sharedtext))
        break;
    case'/about':
        res.writeHead(200,{'content-type': 'text/html'})
        let text1= fs.readFileSync('views/index1.html')
        res.end(text1)
        break; 
    case'/contact':
        res.writeHead(200,{'content-type': 'text/html'})
        let text2= fs.readFileSync('views/contact.html')
        res.end(text2)
        break;    
    case'/somecss':
        res.writeHead(200,{'content-type': 'text/css'})
        res.end("body{background-color:red;}");
        break;
    default:
        res.writeHead(404,{'content-type': 'text/html'})
        res.end("<h2>404 not found</h2>")
        break;
    }
}).listen(4550)