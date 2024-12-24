import axios from "axios";
import { useEffect, useState } from "react";




const Search=()=>{

    const [sturoll,setsturoll] =useState("")
    const [val,setval] =useState([])

    
const handleSubmit=()=>{
    let api="https://mern-crud-bszv.onrender.com/student/studentSearch";
    axios.post(api,{sturoll:sturoll}).then((res)=>{
        setval(res.data)
    })
}

useEffect(()=>{
    handleSubmit()
},[])


const ans = val.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.sturoll}</td>
            <td>{key.stuname}</td>
            <td>{key.stucity}</td>
            <td>{key.stusubject}</td>
        </tr>
        </>
    )
})


    return(
        <>
        
        <h1>This is search page</h1>
        <input type="text"    value={sturoll}  onChange={(e)=>{setsturoll(e.target.value)}}/><br/><br/>
        <button  onClick={handleSubmit}>Search</button>

        {ans}
        </>
    )
}

export default Search;