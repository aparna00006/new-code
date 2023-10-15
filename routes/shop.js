const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const router = express.Router();

//path+method
router.get('/',(req, res, next) => {
    // res.sendFile('/views/shop.html');
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
})

module.exports = router;