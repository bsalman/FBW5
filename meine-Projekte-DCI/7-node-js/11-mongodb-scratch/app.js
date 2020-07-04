const express= require('express');

// const mongoClient =require('mongodb').MongoClient
const {MongoClient,ObjectID}= require('mongodb');

let mongoClient
const app =express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const connectionString ='mongodb+srv://fbw5:123456abc@cluster0.jufz4.mongodb.net/test1?retryWrites=true&w=majority'
app.get('/',(req,res)=>{
    res.send('welcom to Mongodb') 
})
app.get('/connect',(req,res)=>{
    MongoClient.connect(connectionString,{useNewUrlParser:true}).then(client=>{
        mongoClient = client
        console.log(client);
        res.send('connection')
        
    }).catch(error=>{
        console.log(error);
        
        res.send('couldnot connect')
    })
})

app.get('/close',(req,res)=>{
    mongoClient.close()
    res.send('closed')
})

app.get('/adduser',(req,res)=>{
    MongoClient.connect(connectionString,{useNewUrlParser:true}).then(client=>{
        const db= client.db('test1')
        db.collection('users').insertOne({
            email: 'bsalman@gmail.com',
            password:'123'
        }).then(response=>{
            console.log(response);
            res.send(response)
            client.close()
        }).catch(error=>{
            console.log(error);
            client.close()
        })
    }).catch(error => {
        res.send(error)
    })
    
})
app.get('/adduserasync',(req,res)=>{
    //iffie (async()=>{})()
   (async()=>{
    const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
    const db= client.db('test1')
    const response =await db.collection('users').insertOne({
        email: 'b3@bsalman.com',
        password:'123'
    })
    client.close();
    res.send(response)
   })()
  

})
app.get('/insertmany',(req,res)=>{
    //iffie (async()=>{})()
   (async()=>{
    const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
    const db= client.db('test1')
    const response =await db.collection('users').insertMany([{
        email: 'bsalman@gmail.com',
        password:'123'
    },
    {
        email: 'b1@gmail.com',
        password:'123'
    },
    {
        email: 'b2@gmail.com',
        password:'123'
    }])
    client.close();
    res.send(response)
   })()
  

})

app.get('/getusers',(req,res)=>{
    //iffie (async()=>{})()
   (async()=>{
       try {
           const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
    const db= client.db('test1')
    const response =await db.collection('users').find().toArray()
    client.close();
    res.send(response)
       } catch (error) {
           console.log(error);
           
       }
    
   })()
  

})
app.get('/findone',(req,res)=>{
    //iffie (async()=>{})()
   (async()=>{
    
    try {
        const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
        const db= client.db('test1')
       const response =await db.collection('users').findOne({email:'b1@gmail.com'})
            client.close();
         res.send(response)
    } catch (error) {
        res.send(error)
    }
    
   })()
  

})
app.get('/findId',(req,res)=>{
    //iffie (async()=>{})()
   (async()=>{
    
    try {
        const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
        const db= client.db('test1')
       const response =await db.collection('users').findOne({_id:new ObjectID('5efc652fc2776b38bbba426e')})
            client.close();
         res.send(response)
    } catch (error) {
        res.send(error)
    }
    
   })()
  

})
 
app.get('/updatemany',(req,res)=>{
   ( async()=>{
       try {
           const client= await MongoClient.connect(connectionString,{useNewUrlParser:true});
           const ab =client.db('test1')
           const response= await db.collection('users').updateMany({password:'123'},{
               $set:{email:'b10@gmail.com'}
           })
           client.close();
           res.send(response)
       } catch (error) {
        res.send(error)
       }
   })
})
app.get('/updateone',(req,res)=>{
    //iffie (async()=>{})()
   (async()=>{
    
    try {
        const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
        const db= client.db('test1')
       const response =await db.collection('users').ubdateOne({_id:new ObjectID('5efc652fc2776b38bbba426e')},{
           $set:{email:'bla@gmail.de'}
       })
            client.close();
         res.send(response)
    } catch (error) {
        res.send(error)
    }
    
   })()
  

})
app.get('/deletemany',(req,res)=>{
    //iffie (async()=>{})()
   (async()=>{
    
    try {
        const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
        const db= client.db('test1')
       const response =await db.collection('users').deleteMany({email:'bsalman@gmail.com'})
            client.close();
         res.send(response)
    } catch (error) {
        res.send(error)
    }
    
   })()
  

})
app.get('/deleteone',(req,res)=>{
    //iffie (async()=>{})()
   (async()=>{
    
    try {
        const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
        const db= client.db('test1')
       const response =await db.collection('users').deleteOne({password:'123'})
            client.close();
         res.send(response)
    } catch (error) {
        res.send(error)
    }
    
   })()
  

})

app.get('/register',(req,res)=>{
    res.render('register')
})
app.post('/register',(req,res)=>{
   console.log(req.body);
  const username = req.body.username;
 const password = req.body.password;
 
  
  
  (async()=>{
    try {
        const client=await MongoClient.connect(connectionString,{useNewUrlParser:true});
    const db= client.db('test1')

    const response =await db.collection('users').findOne({ email:username})
    console.log(response);
    if (response) {
        client.close()
        res.json(3)
    }else{
        const sendResponse =await db.collection('users').insertOne({
            email: username,
            password:password
        })
        console.log(sendResponse);
        client.close()
        if (sendResponse.result.ok) {
        res.json(1)
        }else{
            res.json(2)
        }
        
        
    }
    
    } catch (error) {
        console.log(error);
        res.json(2)
    }
    
   })()
  
   
})
app.listen(4000, () => {
    console.log('App listening on port 4000!');
});