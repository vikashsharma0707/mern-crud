import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{
   const [input,setinput] = useState({})
    const navigate = useNavigate()

    const handleinput=(e)=>{
        let name = e.target.name;
        let value=e.target.value;
        setinput(values=>({...values,[name]:value}))
    }


    const handleSubmit=()=>{
        let api="https://mern-crud-bszv.onrender.com/student/adminLogin";
        axios.post(api,input).then((res)=>{

            if (res.status== 200){
             navigate("/logout")

             window.localStorage.setItem("user",res.data[0].user)
             window.localStorage.setItem("email",res.data[0].email)
            }

            else{
                alert(" password not match")
            }
        })
    }
    
    return(
        <>
        
        <h1>This is login page</h1>
        <input type="text"   name="email"    value={input.email}  onChange={handleinput}/><br/><br/>
        <input type="text" name="password" value={input.password}  onChange={handleinput}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}



export default Login;

