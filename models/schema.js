const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true

    },
    age:{
        type:Number,
        default:20,
        require:true
    },
    department:{
        type:String,
        default:"CSE",
        enum:["CSE","AI&DS","IT"]
    },
    subjects:{
        type:[String],
        require:true
    }
})

const Student = mongoose.model("Student",studentSchema)

module.exports = Student