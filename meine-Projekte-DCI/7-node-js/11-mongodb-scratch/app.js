const express = require('express')
// const MongoClient = require('mongodb').MongoClient
// const ObjectID = require('mongodb').ObjectID
// or destructuring
const { MongoClient, ObjectID } = require('mongodb')

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './views')

const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0-rmrmn.mongodb.net/test1?retryWrites=true&w=majority'
app.get('/', (req, res) => {
    res.send('welcom to mongodb');
});

app.get('/connect', (req, res) => {
    //open connection to mongodb
    MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(client =>{
        console.log(client)
        res.send('connected');
    }).catch(error => {
        console.log(error);
        res.send('couldnot connect');
    })
    
});



app.get('/adduser', (req, res) => {
    // connect node js to mongodb server or cluster
    MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true} ).then(client => {
        // get the database 
        const db = client.db('test1')
        // insert data to a collection 
        db.collection('users').insertOne({
            title: 'some book',
            category: 'java'
        }).then(response => {
            console.log(response);
            res.send(response);
            client.close()
        }).catch(error => {
            console.log(error);
            res.send(error);
            client.close()
        })
        
    }).catch(error => {
        res.send('can not connect');
    })
    
});


app.get('/adduserasync', (req, res) => {

    // other code 
    // iffie (async ()=>{ your code })()
   (async ()=>{
       try {
        const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        const db = client.db('test1')
        const response = await db.collection('users').insertOne({
            email: 'bla@bla.bla',
            password: '123456'
        })
        client.close()
        res.send(response);
       } catch (error) {
           res.send(error);
       }
       
   })()
});

app.get('/insertmany', (req, res) => {
    (async ()=>{
        try {
         const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
         const db = client.db('test1')
         const response = await db.collection('users').insertMany([
             {
             email: 'bla@bla.bla',
             password: '123456'
         },
         {
            email: 'bla@bla.bla1',
            password: '123456'
        },
        {
            email: 'bla@bla.bla2',
            password: '123456'
        },
        {
            email: 'bla@bla.bla3',
            password: '123456'
        },
        ])
         client.close()
         res.send(response);
        } catch (error) {
            res.send(error);
        }
        
    })()
});

app.get('/getusers', (req, res) => {
    (async ()=>{
        try {
         const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
         const db = client.db('test1')
         const response = await db.collection('users').find().toArray()
         //console.log(response);
         
         client.close()
         res.send(response);
        } catch (error) {
            res.send(error);
        }
        
    })()
});
app.get('/findone', (req, res) => {
    (async ()=>{
            try {
                const client =  await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
                const db = client.db('test1')
                const response = await db.collection('users').findOne({_id: new ObjectID('5efc575b6224502c8adead59')})
                client.close()
                res.send(response);
            } catch (error) {
                res.send(error);
            }
            

    })()
});

app.get('/updatemany', (req, res) => {
    (async ()=>{
        try{
            const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
            const db = client.db('test1')
            const response = await db.collection('users').updateMany({password: '123456'},{
                $set: {email: 'asd@asd.asd'}
            })
            client.close()
            res.send(response);
        } catch(error){
            res.send(error);
        }
    })()
});

app.get('/updateone', (req, res) => {
    (async () => {
        try {
            const client = await MongoClient.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true})
            const db = client.db('test1')
            const response = await db.collection('users').updateOne({_id: new ObjectID('5efc575b6224502c8adead59')},{
                $set: {email: 'bla@email.email'}
            })
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    })()
});

app.get('/deletemany', (req, res) => {
    (async () => {
        try {
            const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
            const db = client.db('test1')
            const response = await db.collection('users').deleteMany({password: '123456'})
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    })()
    
});
app.get('/deleteone', (req, res) => {
    (async() => {
        try {
            const client = await MongoClient.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true})
            const db = client.db('test1')
            const response = await db.collection('users').deleteOne({_id: new ObjectID('5efc575b6224502c8adead59')})
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    })()
});


app.get('/register', (req, res) => {
    res.render('register')
});
app.post('/register', (req, res) => {
    // 1 register success
    // 2 server error
    // 3 user is already exist
    //console.log(req.body)
    const username = req.body.username.trim()
    const password = req.body.password
    if(username && password) {
        (async () => {
            try {
                const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}) 
                const db = client.db('test1')
                const response = await db.collection('users').findOne({email: username})
                
                //console.log(response)
                if (response) {
                    client.close()
                    res.json(3)
                } else {
                    const insertResponse = await db.collection('users').insertOne({
                        email: username,
                        password: password
                    })
                    // console.log(insertResponse);
                    client.close()
                    if(insertResponse.result.ok) {
                        res.json(1)
                    } else {
                        res.json(2)
                    }
                    
                }

            } catch (error) {
                res.json(2)
            }
            

        })()
    } else{
        res.json(2)
    }
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});