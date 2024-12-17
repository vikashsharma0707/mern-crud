const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    user:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("admin",adminSchema)