const mongoose= require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        unique:true,
        required: true
    },
    age:{
        type:Number,
    },
    phone:{
        type:Number,
    },
    course:{
        type:String,
    },
    address:{
        type:String,
        trim: true
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher'
    },
    placementTeacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Placement'
    }
},{timestamps:true})

module.exports=mongoose.model('Student',studentSchema)