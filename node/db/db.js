const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("DB Connected Sucessfully")
}).catch((error)=>{
    console.log(`DB Connection failed: ${error}`)
})