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
        let market = req.query.market;
        console.log(country, market);
        let query;

        if (market === "All") {
            query = { "address.country" : country }
        } else if (market === "Other" && country === "United States") {
            query = { "address.country" : country, "address.market" : "Other (Domestic)" }
        } else if (market === "Other") {
            query = { "address.country" : country, "address.market" : "Other (International)" }
        } else {
            query = { "address.country" : country, "address.market" : market }
        }
        db.collection("listingsAndReviews").find(query).limit(100).toArray()
            .then(results => {
                console.log(results);
                res.json(results);
            })  
            .catch(error => console.error(error))
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