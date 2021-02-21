const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

const api = require('./route/APIrouter')

mongoose.connect('mongodb://127.0.0.1:27017',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("MongoDB Connect Complete"))
    .catch(err => console.log(`Mongo Error : ${err}`))

app.use('/api', api);

app.listen(port, () => {
    console.log(`Express server(port : ${port}) start...`);
})