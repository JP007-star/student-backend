const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name: {
        type:String,
        required: true,
        trim: true
    },
    age:{
        type:Number,
        required:true
    },
    fee:{
        type:Number,
        required:true
    },
    updatedAt:Date,

},{timestamps:true})

module.exports = mongoose.model('Student', studentSchema)  