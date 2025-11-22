const mongoose = require("mongoose");
require("dotenv").config();
const MongoDB_URI = process.env.MongoDB_URI;
const connectDb = async()=>{
    try{
         await mongoose.connect(MongoDB_URI);
         console.log("mongo db connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDb