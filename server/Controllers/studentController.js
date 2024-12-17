


const stuModel = require("../Models/StudentModel")
const adminModel = require("../Models/adminModel")



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


const adminSave = async(req,res)=>{
    const {user,email,password} = req.body;

    const Data = await adminModel.create({
        user:user,
        email:email,
        password:password
    })

    res.send(Data)
}

const adminLogin = async(req,res)=>{
    const {email,password} = req.body;
    const Data = await adminModel.find({email:email})

    if(Data.length<1){
        res.status(404).send("invalid data")
    }

    else{
        if(Data[0].password!=password){
            res.status(404).send("invalid password")
        }


        else{
            res.status(200).send(Data)
        }
    }

}



const productDetail = async(req,res)=>{
    const Data = await stuModel.findById(req.body.id)
    res.send(Data)
}


module.exports= {
    stuSave,
    studentDisplay,
    studentSearch,
    studentDelete,
    studentEdit,
    studentUpdate,
    adminSave,
    adminLogin,
    productDetail
}

