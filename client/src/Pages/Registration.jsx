import axios from "axios";
import { useState } from "react";



const Registration=()=>{

    const [input,setinput] =useState({})

    const handleInput=(e)=>{
        let name =e.target.name;
        let value = e.target.value;
        setinput(values=>({...values,[name]:value}))
    }

    const handleSubmit=()=>{
        let api="https://mern-crud-bszv.onrender.com/student/adminSave";
        axios.post(api,input).then((res)=>{
              alert("data added sucessfully")
        })
    }
    return(
        <>
        
        <h1>This is registration page</h1>
        <input type="text" name="user" value={input.user} onChange={handleInput}/><br/><br/>
        <input type="text" name="email" value={input.email} onChange={handleInput}/><br/><br/>
        <input type="text" name="password" value={input.password} onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Registration;