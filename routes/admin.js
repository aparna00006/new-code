const {log} = require('console');
const path = require('path');

const express= require('express');

//const rootDir = require('../util/path');

const router = express.Router()

//get - /add-product
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});

// post-/add-product
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.send('<h1>Product submitted!</h1>')
    //res.redirect('/')

})

module.exports = router;