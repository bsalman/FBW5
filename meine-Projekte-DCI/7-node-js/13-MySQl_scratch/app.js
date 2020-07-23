const express= require('express')
const mySql= require('mysql')
  
const app = express()
app.use(express.urlencoded({extended: false}))
app.get('/',(req,res)=>{
    res.send('welcome to SQL')
})
let con =null

function connect() {
  return new Promise((resolve,reject)=>{
       if(con){
        if(con.state==='disconnected'){
             con.connect(error=>{
                    if (error) {
                        reject(error)
                    }else{
                     resolve()
                   }
                 })
        }else{
            resolve()
        }
    }else{
          con =mySql.createConnection({
         host:'localhost',
         port:3306,
       user:'root',
        password:'0969000583',
        database:'fbw5_test'
     })
     con.connect(error=>{
        if (error) {
            reject(error)
        }else{
         resolve()
       }
     })
    }
  })

   
}
app.get('/connect',(req,res)=>{
    // const con =mySql.createConnection({
    //     host:'localhost',
    //     port:3306,
    //     user:'root',
    //     password:'0969000583',
    //     database:'fbw5_test'
    // })
    // con.connect(error=>{
    //     if (error) {
    //         res.send(error.message)
    //     }else{
    //         res.send('connected')
    //     }
    // })
    connect().then(()=>{
        res.send('connected')
    }).catch((error)=>{
        res.send(error.message)
    })
})

app.get('/insert',(req,res)=>{
    connect().then(()=>{
        con.query("INSERT INTO users(email,password) VALUES ('b1@gmail.com','123')",(error,result,fields)=>{
             console.log(error);
             console.log(result);
             console.log(fields);
if (error) {
    res.send(error.message)
}else{
res.json(result)
}

        })
    }).catch((error)=>{
        res.send(error.message)
    })
})
app.get('/select',(req,res)=>{
    connect().then(()=>{
        con.query('SELECT * FROM users',(error,result,fields)=>{
            console.log(error);
             console.log(result);
             console.log(fields);
             if (error) {
                res.send(error.message)
            }else{
            res.json(result)
            }
        })
    }).catch((error)=>{
        res.send(error.message)
    })
})
       
    


app.get('/delete',(req,res)=>{
    connect().then(()=>{
        con.query("DELETE FROM users WHERE id=1",(error,result,fields)=>{
            console.log(error);
            console.log(result);
            console.log(fields);
if (error) {
   res.send(error.message)
}else{
res.json(result)
}

       })
    }).catch((error)=>{
        res.send(error.message)
    })
})

app.get('/update',(req,res)=>{
    connect().then(()=>{
  con.query('UPDATE users SET Email = "b10@bmail.com" WHERE id=4',(error,result,field)=>{
    console.log(error);
    console.log(result);
    console.log(field);
if (error) {
res.send(error.message)
}else{
res.json(result)
}
  })
    }).catch((error)=>{
        res.send(error.message)
    })
})
app.listen(5400,()=>{
    console.log('App listening on port 5400()');
})