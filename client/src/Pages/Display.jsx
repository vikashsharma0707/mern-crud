import axios from "axios";
import { useEffect, useState } from "react";



const Display=()=>{

    const [val,setval]=useState([])

    const loaddata=()=>{
        let api="https://mern-crud-2-w2q5.onrender.com/student/studentDisplay"
        axios.get(api).then((res)=>{
              setval(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    })



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
        
        <h1>This is display page</h1>
        {ans}
        </>
    )
}

export default Display;
