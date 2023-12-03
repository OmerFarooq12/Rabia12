const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
   image : {
    type: String,
    required : false,
    default : null

   } ,
   username: {
    type: String,
    required : true,

   },
   email: {
    type: String,
    required : true,

}})
 const userModel = mongoose.model("User" , userSchema)
 module.export = userModel