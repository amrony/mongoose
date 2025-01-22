const express = require("express");
const app = express();

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})

//Mongoose library instance
const mongoose = require('mongoose');
//URL of MongoDB Database
const mongoDBURL = 'mongodb://localhost:27017/testDB';

//connect to Database
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("connected to database") })
    .catch((err) => { console.log("error", err) })