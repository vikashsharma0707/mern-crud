import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Logout=()=>{

    const [user,setuser] =useState("")
    const [email,setemail] =useState("")
    const navigate =useNavigate()


    useEffect(()=>{
        const uname = window.localStorage.getItem("user")
        const uemail = window.localStorage.getItem("email")

        if(!uname){
            navigate("/display")
        }

        setuser(uname)
        setemail(uemail)
    },[])


    const logout=()=>{
        window.localStorage.clear()
        navigate("/display")
    }


    return(
        <>
        
        <h1>This is logout page  {user} {email}</h1>
        <button  onClick={logout}>Logout</button>


        </>
    )
}

export default Logout;