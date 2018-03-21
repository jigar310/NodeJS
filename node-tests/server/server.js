const express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error:'Page not found.',
        name: 'TODO App 1.0'
    });
});

app.get('/users', (req,res) => {
    
    res.status(200).send([
    {
        name: 'Jigar',
        age:30
    },
    {
        name: 'Adam',
        age:25
    },
    {
        name: 'Alex',
        age:56
    }
]);
});

app.listen(3000);

module.exports.app = app;