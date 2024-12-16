


const stuModel = require("../Models/StudentModel")



const stuSave = async(req,res)=>{
    const {sturoll,stuname,stucity,stusubject} =req.body;

    const Data = await stuModel.create({
        sturoll:sturoll,
        stuname:stuname,
        stucity:stucity,
        stusubject:stusubject
    })

    res.status(200).json(Data)
}

const studentDisplay = async(req,res)=>{
    try{
      const Data = await stuModel.find()

      res.send(Data)
    }
    catch(err){
      res.send("data not found")
    }
}


const studentSearch = async(req,res)=>{
    const {sturoll}= req.body;

    const Data = await stuModel.find({sturoll:sturoll});
    res.send(Data)
}

const studentDelete=async(req,res)=>{
    const myid = req.body.id;
    const Data = await stuModel.findByIdAndDelete(myid)
    res.send("data deleted")
}

const studentEdit = async(req,res)=>{
    const myid = req.body.id;
    const Data = await stuModel.findById(myid)
    res.send(Data)
}

const studentUpdate=async(req,res)=>{
    const{_id,sturoll,stuname,stucity,stusubject} =req.body;
    const Data = await stuModel.findByIdAndUpdate(_id,{
        sturoll:sturoll,
        stuname:stuname,
        stucity:stucity,
        stusubject:stusubject
    })

    res.send("data added sucessfully")
}

module.exports= {
    stuSave,
    studentDisplay,
    studentSearch,
    studentDelete,
    studentEdit,
    studentUpdate
}

