const express = require("express");
const cors = require("cors")
const app = express()
const connectDb = require("./db")

app.use(cors())

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    try{
     res.status(200).json({message:"get request called"})
    }
    catch(err){
      console.log(err)
    }
})

connectDb()

const loginRoute = require("./Routes/LoginRoute")
const studentRoutes = require("./Routes/StudentRoutes")


app.use("/student",loginRoute)
app.use("/students",studentRoutes)

app.listen(3000,(err)=>{
  if(err){
    console.log(err)
    return;
  }
    console.log("server running at 3000")
})