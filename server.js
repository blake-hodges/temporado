const express = require("express");

const app = express();

app.get("/listings", (req, res) => {
    let dbPath = require('./db.json');
    res.send(JSON.stringify(dbPath));
})

app.listen(8080, () => {
    console.log("server started on port 8080");
})