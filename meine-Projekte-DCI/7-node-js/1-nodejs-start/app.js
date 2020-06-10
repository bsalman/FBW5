const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {
    // res.writeHead(200, {'content-type': 'application/json'})
    // res.writeHead(200, {'content-type': 'text/plain'}) // send text data

     //send json text
    // let obj = {
    //     name: "ahmad",
    //     firstName: "osman"
    // }

    //res.end(JSON.stringify(obj))

    //send html text
    // let myHtml =
    //  '<html>'+
    // '<head>'+
    // '<title>my first server page</title>'+
    // '</head>'+
    // '<body>'+
    // '<h2>text</h2>'+
    // '</body>'+
    // '</html>';

    // res.end(myHtml);


    //send html text from file

    // reading file
    // fs.readFile('views/index.html', (err, data) => {
    //     //console.log(err);
    //     res.end(data);
    // })

    console.log(req.url);
    if(req.url == "/1"){
        res.writeHead(200, {'content-type': 'text/html'}) // send html
        let text = fs.readFileSync('views/index.html');
        res.end(text);
    }else{
        if(req.url == "/2"){
            res.writeHead(200, {'content-type': 'text/html'}) // send html
            let text = fs.readFileSync('views/index1.html');
            res.end(text);
        } else {
            if(req.url == '/bldsdf/style.css'){
                res.writeHead(200, {'content-type': 'text/css'}) // send html
            let text = fs.readFileSync('views/style.css');
            res.end(text);
            } else{
                if(req.url == '/fgfgfgfgfg/ss.css'){
                    res.writeHead(200, {'content-type': 'text/css'}) // send html
                    let text = fs.readFileSync('views/style.css');
                    res.end(text);
                } else{
                    res.writeHead(404, {'content-type': 'text/html'}) // send html
                res.end("404 no such as page");
                }
                
            }
            
        }
    }
    
    

}).listen(4000)


