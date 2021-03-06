const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/keys')
const requireLogin = require('../middleware/requirelogin')
const bodyParser =  require('body-parser')

router.use(bodyParser.json())


router.get('/protected',requireLogin,(req,res) => {
    res.send("hello user") 
})


router.post('/signup',(req,res)=>{
    const {name,email,password,pic} = req.body
    if(!email || !password || !name)
    {
        return res.status(422).json({error:"add all fields"})
    }
    User.findOne({email:email})
    .then((savedUser) =>{
        if(savedUser){
            return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name,
                pic:pic
            })
    
            user.save()
            .then(user=>{
                res.json({message: "saved successfuly"})
            })
            .catch(err=>{
                console.log(err)
            })

        })
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password)
    {
     return res.status(422).json({error:"add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
          return res.send(422).json({error:"Invalid User"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email,pic} = savedUser
                res.json({token,user:{_id,name,email,pic}})                
            }
            else{
                return res.send(422).json({error:"Invalid User"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})



module.exports = router