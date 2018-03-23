// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')
   
    // db.collection('Todos').find({
    //     _id:new ObjectID('5ab3bed7b605dc33c4e83f13')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to connect to Todos');
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to connect to Todos');
    // });

    db.collection('Users').find({
        name:'Jigar'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to connect to Todos');
    });
    // client.close();
});