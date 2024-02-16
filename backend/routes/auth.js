const express=require('express');
const User = require('../models/user');
const router=express.Router();


// Create a user using POST /"api/auth/"
router.post('/',(req,res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.send("hello");
})

module.exports=router;
