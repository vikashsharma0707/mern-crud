const mongoose=require("mongoose");


const stuSchema = new mongoose.Schema({

sturoll:{
    type:Number,
    require:true
},


stuname:{
    type:String,
    require:true
},

stucity:{
    type:String,
    require:true
},

stusubject:{
    type:String,
    require:true
}
})



module.exports = mongoose.model("student",stuSchema)