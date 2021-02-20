const express = require('express')
const app = express()
const port = 5000

const api = require('./route/APIrouter')

app.use('/api', api);

app.listen(port, () => {
    console.log(`Express server(port : ${port}) start...`);
})