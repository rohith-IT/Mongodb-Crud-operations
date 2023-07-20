const mongoose= require('mongoose')
const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        unique:true
    },
    phone:{
        type:Number,
    },
    address:{
        type:String,
        trim: true
    },
   
},{timestamps:true})

module.exports=mongoose.model('Teacher',TeacherSchema)