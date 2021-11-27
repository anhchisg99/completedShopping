const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')



router.post('/create',async (req,res)=>{
    try {
        const user = await User.create({username,password} = req.body)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})
router.post('/login',async (req,res)=>{
    try{
        const savedAdmin = await User.findOne({username:req.body.username});
        const match = await bcrypt.compare(req.body.password,savedAdmin.password);
        if(match){
            const accessToken =  await jwt.sign({user:savedAdmin.username},process.env.ACCESS_TOKEN_SECRET)
            res.json({accessToken:accessToken})
        }    
    }catch(err){
        res.json(err)
    }
})
module.exports = router