// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')
   
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5ab3c314dcc841398cebf8ac")
    // },{
    //     $set: {
    //         completed:true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: 123
    },{
        $set:{
            name:'Jigar'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    })
    // client.close();
});