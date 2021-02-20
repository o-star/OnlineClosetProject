const express = require('express')
const router = express.Router();
const LoginRouter = require('./LoginRouter')

router.use('/', LoginRouter);

module.exports = router;