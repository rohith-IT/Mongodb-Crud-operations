const mongoose = require('mongoose')

 
 const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.ATLAS_URI,
        {
             useNewUrlParser: true,
             useUnifiedTopology: true,
          }
          )
    console.log("MongoDB Connected Successfully")
    }catch(error){
        console.log(error)
    }
}


module.exports = connectDB;
