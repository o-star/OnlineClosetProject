const express = require('express')
const router = express.Router();

router.get('/login', (req, res) => {
    console.log('Login Request arrive');
    res.send('Acquire login request');
})

module.exports = router;