


const express = require("express");
const app = express()

const bodyparser = require('body-parser');
const cors = require("cors")
const mongoose =require("mongoose")

require("dotenv").config()
 const stuRoute = require("./Routes/studentRoute");

mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("db connected sucessfully")
})

const port = process.env.PORT || 2000

app.use(cors())

app.get("/",(req,res)=>{
    res.send("code is working")
})

// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:true}))

// parse application/json
app.use(bodyparser.json())

 app.use("/student",stuRoute);

app.listen(port,(req,res)=>{
 console.log(`server is running on ${port}`)
})