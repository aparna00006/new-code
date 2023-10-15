const {log} = require('console');
const path = require('path');

const express= require('express');


const router = express.Router()

//get - /contact
router.get('/contact',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
});

// post-/add-product
router.post('/success',(req,res,next)=>{
    console.log('Form-Data',req.body);
    res.send('<h1>ThankYou! Details Submitted sucessfully!</h1>')
    //res.redirect('/')

})
module.exports= router;
