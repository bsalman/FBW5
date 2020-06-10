const http = require('http')
const fs = require('fs')
const url = require('url')

// import nodemailer
const nodemailer = require('nodemailer')

// import our module
const saver = require('./modules/saver')

http.createServer((req, res)=>{
let q = url.parse(req.url, true)

switch (q.pathname) {
    case '/':
        let indexHtml = fs.readFileSync('views/26-HTML-CSS-Summerize/index.html')
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(indexHtml)
        break;
    case '/css/index.css':
        let indexCss = fs.readFileSync('views/26-HTML-CSS-Summerize/css/index.css')
        res.writeHead(200, {'content-type': 'text/css'})
        res.end(indexCss)
        break;
    case '/img/Logo.png':
        let indexLogo = fs.readFileSync('views/26-HTML-CSS-Summerize/img/Logo.png')
        res.writeHead(200, {'content-type': 'image/png'})
        res.end(indexLogo)
        break;
    case '/img/hero.jpg':
        let indexBanner = fs.readFileSync('views/26-HTML-CSS-Summerize/img/hero.jpg')
        res.writeHead(200, {'content-type': 'image/jpeg'})
        res.end(indexBanner)
        break;
    case '/contact':
        //saver.saveContent("Hello I am a content", 'content.txt')
        if(q.query.name){
            let message = q.query.name + '\n' + q.query.subject + '\n' + q.query.message + '\n' 
            saver.saveContent(message , 'content.txt')

            // send email
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'blabla@gmail.com',
                    pass: 'your password'
                }
            })
            const mailOption ={
                from: 'blabla@gmail.com',
                to: 'emailtosendto@bla.com',
                subject:q.query.subject,
                text: q.query.name + '\n' + q.query.message
            }
            transporter.sendMail(mailOption, function (error, info) {
                if(error){
                    console.log(error);
                    
                } else {
                    console.log(info.response);
                    
                }
              })


        }
        let contactContent = fs.readFileSync('views/26-HTML-CSS-Summerize/contact.html')
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(contactContent)
        break
    default:
        res.writeHead(404, {'content-type': 'text/html'})
        res.end("404 no page founded")
        break;
}
}).listen(4400)