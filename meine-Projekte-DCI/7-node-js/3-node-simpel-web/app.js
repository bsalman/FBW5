const http= require('http');
const fs= require('fs');
const url=require('url')
// import nodemailer 
const nodemailer =require('nodemailer')

// import our modul
const saver=require('./modules/saver')


http.createServer((req,res)=>{
    let urlObj =url.parse(req.url,true)
    switch(urlObj.pathname){
case '/':
    res.writeHead(200,{'content-type':'text/html'})
    let text= fs.readFileSync('views/index.html')
    res.end(text)
    break
case '/css/index.css':
    let cssFile= fs.readFileSync('views/css/index.css')
    res.writeHead(200,{'content-type': 'text/css'})
    
    res.end(cssFile)
    break
case '/img/Logo.png':
    res.writeHead(200,{'content-type': 'image/png'})
    let imgLogo= fs.readFileSync('views/img/Logo.png')
    res.end(imgLogo)
    break
case '/img/hero.jpg':
    res.writeHead(200,{'content-type': 'image/jpg'})
    let indexBaner= fs.readFileSync('views/img/hero.jpg')
    res.end(indexBaner)
    break;
case '/contact':
    console.log(urlObj);





    if (urlObj.query.name) {
        saver.saveContent(urlObj.query.name+'\n'+urlObj.query.subject+'\n'+urlObj.query.messag,'content.txt')
        //send email
        const transporter=nodemailer.createTransport({service:'gmail',
    auth:{
        user:'bs395280@gmail.com',
        pass:'0969000583'
    }
      })
      const mailOption={
          from:'bs395280@gmail.com',
          to:'bsalman395850@gmail.com',
          subject:'Sending Email using Node.js',
          text:' hi hi hi '

      }
      transporter.sendMail(mailOption,function(error,info){
          if(error){
              console.log(error)
          } else {
              console.log(info.response)
          }
      
    })

    }

    
        let contactContent= fs.readFileSync('views/contact.html')
        res.writeHead(200,{'content-type':'text/html'})      
        res.end(contactContent) 
        break;
default:
        res.writeHead(404,{'content-type': 'text/html'})
        res.end("<h2>404 not found</h2>")
        break;
 
    }

}).listen(4555)