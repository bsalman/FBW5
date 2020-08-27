const express = require('express');
const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
    res.send('Products');
})

productsRouter.get('/pr1', (req, res) => {
    res.send('pr1');
})
// productsRouter.get('/pr1/subpr1', (req, res) => {
//     res.send('subpr1');
// })
productsRouter.get('/pr2', (req, res) => {
    res.send('pr2');
})

module.exports = productsRouter;