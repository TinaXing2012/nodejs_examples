const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then(client => {
        console.log('connected...');
        const db = client.db('testDB');
        db.collection('products').find().each(function(err, doc) {
            console.log(doc);
            client.close();
        });

    }).catch(err => console.log(err));