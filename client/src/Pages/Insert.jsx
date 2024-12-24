import { useState } from "react";
import axios from "axios"


const Insert=()=>{

    const [input,setinput] =useState({})

    const handleInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setinput(values=>({...values,[name]:value}))
    }


    const handleSubmit=()=>{
        let api="https://mern-crud-2-w2q5.onrender.com/student/studentSave";
        axios.post(api,input).then(()=>{
            alert("data save")
        })
    }
    


    return(
        <>
        <h1>This is insert page</h1>
        <input type="text"   name="sturoll"  value={input.sturoll}  onChange={handleInput}/><br/><br/>
        <input type="text"   name="stuname"  value={input.stuname}  onChange={handleInput} /><br/><br/>
        <input type="text"   name="stucity"  value={input.stucity}  onChange={handleInput}/><br/><br/>
        <input type="text"   name="stusubject"  value={input.stusubject}  onChange={handleInput}/><br/><br/>
        <button  onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Insert;