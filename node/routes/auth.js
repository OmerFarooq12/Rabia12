const express = require("express")
const path = require("path")
const router = express.Router()
const User = require("../model/usermodel")
//router.user(express.static(__dirname)
router.get('/',(req , res) =>{
res.sendFile(path.join(__dirname ,'../signup.html'))

}) 
router.post('/signup',(req , res) =>{
    console.log(req.body) 
})
router.post('/register', async(req,res)=> {
    const user = new User()
    user.image = req.body.image
    user.email = req.body.username
    user.password = req.body.password
    user.isActive = req.body.isActive
    await User.save()
    res.send("user added sucessfull...")
})
module.exports = router