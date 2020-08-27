const express = require('express');
const homeRouter = require('./routs/homeRouter');
const productsRouter = require('./routs/productsRouter');
const app = express();

// app.get('/home', (req, res) => {
//     res.send('blabla');
// });

app.use('/home', homeRouter);
app.use('/products', productsRouter);
app.get('/', (req, res) => {
    res.send('Hello');
});
// app.get('/home', (req, res) => {
//     res.send('home');
// });

// app.get('/home/subhome', (req, res) => {
//     res.send('subhome');
// });


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});