const express = require('express')

// require mongoose
const mongoose = require('mongoose')

// mongodb+srv://[USERNAME]:[PASSWORD]S@cluster0-[Diffrent depend on the cluster].mongodb.net/[DATABASE NAME]?retryWrites=true&w=majority
const connectionString = 'mongodb+srv://user1:Rbt6CCjKCHdYYwfe@cluster0.jufz4.mongodb.net/test1?retryWrites=true&w=majority'
const app = express()


// get schema object from mongoose

// const Schema = mongoose.Schema
const {Schema} = mongoose

// create users schema
const usersSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
})


const Users = mongoose.model('users', usersSchema)

app.get('/', (req, res) => {
    res.send('Welcome to Mongoose');
})

app.get('/connect', (req, res) => {
    // check if mongoose is already connected to database
    if (mongoose.connection.readyState === 1) {
        res.send('Already connected');
    } else {
        mongoose.connect(connectionString, {
            useCreateIndex: true,
            useNewUrlParser: true
        }).then(() => {
            res.send('it is connected now');
        }).catch(error => {
            res.send(error);
        })
    }
});

function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject()
            })
        }
    })  
}

app.get('/adduser', (req, res) => {
    connect().then(() => {
        // create  new user 
        const newUser = new Users({
            fname: 'Ahmad',
            lname: 'osman',
            email: 'ahmad3@ahmad-osman.com',
            age: 34,
            active: true
        })
        newUser.save().then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })

    }).catch(error => {
        res.send(error.message);
    })
});
app.get('/updateuser', (req, res) => {
    connect().then(() => {
        Users.updateOne({_id: '5f0c5b279f11c06b578190ed'}, {
            age: 50,
            // increase the version number in the database with one
            // to show how many times this document has been updated
            $inc: { __v: 1 }
        }).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message);
    })
});

app.get('/updateusers', (req, res) => {
    connect().then(() => {
        Users.updateMany({lname: 'osman'},{
            fname: 'Mr. Ahmad',
            $inc: {__v: 1}
        }).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message);
    })
});
app.get('/getuser', (req, res) => {
    connect().then(() => {
        Users.findOne({email: 'ahmad3@ahmad-osman.com'}).then(result => {
            // return an object (first found result)
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message);
    })
    
});
app.get('/getusers', (req, res) => {
    connect().then(() => {
        Users.find().then(result => {
            // return an Array
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message)
    })
    
});
app.get('/deleteuser', (req, res) => {
    connect().then(() => {
        Users.deleteOne({email: 'ahmad3@ahmad-osman.com'}).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message);
    })
    
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});