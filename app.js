const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const todoHandler = require('./route/todoRoute')

app.use(express.json());

// database connection

mongoose.connect('mongodb://127.0.0.1:27017/ecomDB').then(() => {
  console.log("Database Connected");
})
.catch((err) => {  
  console.log("Database Error",err);
})

app.use('/todo', todoHandler)

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`your server is running on http://localhost:${port}`)
})