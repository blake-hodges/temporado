const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const dbFile = require("./db.json");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb+srv://tbhodges:i4XlRfTEjl9hayD7@cluster0.0fhve.mongodb.net/sample_airbnb?retryWrites=true&w=majority';



MongoClient.connect(url)
.then(client => {
    console.log('connected to database');
    const db = client.db('sample_airbnb')

    app.get("/destinations", (req, res) => {
        let country = req.query.country;
        console.log(country);
        let query = { "address.country" : country }
        db.collection("listingsAndReviews").find(query).limit(10).toArray()
            .then(results => {
                console.log(results.data);
                res.json(results);
            })  
            .catch(error => console.error(error))
    })

    app.get("/update", (req, res) => {
        const filter = {"address.country" : "China"};
        const updateDoc = {
            $set: { 
                "address.market" : "Shenzhen"
            }
        }
        db.collection("listingsAndReviews").updateMany(filter, updateDoc);
    })

    app.get("/data", (req, res) => {
        
        res.send(JSON.stringify(dbFile));
    });


})
    



app.listen(8080, () => {
    console.log("server started on port 8080");
})

const cleanup = (event) => {
    MongoClient.close();
    process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);