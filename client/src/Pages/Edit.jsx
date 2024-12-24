import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Edit=()=>{

    const {stuid} =useParams()

    const [input,setinput]=useState({})

    const loaddata=()=>{
        let api= "http://localhost:8000/student/studentEdit";
        axios.post(api,{id:stuid}).then((res)=>{
           setinput(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    },[])




    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setinput(values=>({...values,[name]:value}))
    }



    const handleSubmit=()=>{
         let api="https://mern-izj9.onrender.com/student/studentUpdate";
         axios.post(api,input).then((res)=>{
          alert("data added sucessfully")
         })
    }

    


    return(
        <>
        
        <h1>This is edit page</h1>
        <input type="text"   name="sturoll"  value={input.sturoll}  onChange={handleInput}/><br/><br/>
        <input type="text"   name="stuname"  value={input.stuname}  onChange={handleInput} /><br/><br/>
        <input type="text"   name="stucity"  value={input.stucity}  onChange={handleInput}/><br/><br/>
        <input type="text"   name="stusubject"  value={input.stusubject}  onChange={handleInput}/><br/><br/>
        <button  onClick={handleSubmit}>Submit</button>
        </>
    )
}


export default Edit;