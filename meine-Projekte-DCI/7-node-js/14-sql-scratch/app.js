const express = require('express')
// require mysql module
const mySql = require('mysql')

const app = express()

app.get('/', (req, res) => {
    res.send('Welcom to SQL');
});
let con = null
function connect() {
    return new Promise((resolve, reject) => {
        if (con) {
        if (con.state === 'disconnected') {
            con.connect(error => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        } else {
            resolve()
        }
    } else {
        con = mySql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '1234qweR!',
            database: 'fbw5_test'
        })
        con.connect(error => {
            if (error) {
                reject(error)
            } else {
                resolve()
            }
        })
    }
    })
 }

app.get('/connect', (req, res) => {
    // const con = mySql.createConnection({
    //     host: 'localhost',
    //     port: 3306,
    //     user: 'root',
    //     password: '1234qweR!',
    //     database: 'fbw5_test'
    // })
    // con.connect(error => {
    //     if (error) {
    //         res.send(error.message);
    //     } else {
    //         res.send('connected');
    //     }
    // })
connect().then(() => {
    res.send('connected');
}).catch(error => {
    res.send(error.message);
})
});

app.get('/insert', (req, res) => {
    connect().then(() => {
        con.query("INSERT INTO users (email, password) VALUES ('aaa1@sss.ff', '12345123547')", (error, result, fields) => {
            console.log(error);
            console.log(result);
            console.log(fields);
            if(error) {
                res.send(error.message);
            } else {
                res.json(result);
            }
        })
    }).catch(error => {
        res.send(error.message);
    })
});

app.get('/select', (req, res) => {
    connect().then(() => {
        con.query('SELECT * FROM users', (error, result, fields) => {
            console.log(error);
            console.log(result);
            console.log(fields);
            if (error) {
                res.send(error.message);
            } else {
                res.json(result);
            }
        })
    }).catch(error => {
        res.send(error.message);
    })
});


app.get('/delete', (req, res) => {
    connect().then(() => {
        con.query('DELETE FROM users WHERE id = 1', (error, result, fields) => {
            console.log(error);
            console.log(result);
            console.log(fields);
            if (error) {
                res.send(error.message);
            } else {
                res.json(result)
            }
        })
    }).catch(error => {
        res.send(error.message)
    })
});

app.get('/update', (req, res) => {
    connect().then(() => {
        con.query("UPDATE users SET email = 'ahmad@ahmad.com' where id = 4 ", (error, result, fields) => {
            console.log(error);
            console.log(result);
            console.log(fields);
            if (error) {
                res.send(error.message);
            } else {
                res.json(result)
            }
        })
    }).catch(error => {
        res.send(error.message);
    })
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});