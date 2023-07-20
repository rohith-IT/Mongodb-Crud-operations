const mongoose = require('mongoose')
const placementSchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true

    },
    phone:{
        type:Number
    }
})
module.exports=mongoose.model('Placement',placementSchema)