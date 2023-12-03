const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
require("dotenv").config()
require("./db/db")
const Port = process.env.PORT
//router
const authRoutes = require('./routes/auth')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/auth' , authRoutes)
app.listen(Port , () =>{
    app.use(bodyParser.json())
app.get('/',(req , res) =>{
})
app.post('/',(req,res)=>{
   console.log(req.body) 
})
console.log(`Server Started At Port ${Port}`)
})