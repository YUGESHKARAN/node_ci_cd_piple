const mongoose = require("mongoose");

const connectDb = async()=>{
    try{
         await mongoose.connect("mongodb://localhost:27017/myDB");
         console.log("mongo db connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDb