const express = require('express')
const router = express.Router();
const UserInfoModel = require('../models/UserInfoModel')

router.use(express.json());

router.post('/login', (req, res) => {
    console.log('Login Request arrive');
    console.log(req.body);
})

module.exports = router;