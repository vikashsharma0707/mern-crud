import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Update=()=>{
    const [val,setval]=useState([])
    const navigate = useNavigate()

    const loaddata=()=>{
        let api="http://localhost:8000/student/studentDisplay"
        axios.get(api).then((res)=>{
              setval(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    })

    const mydel=(id)=>{
        let api="http://localhost:8000/student/studentDelete"
        axios.post(api,{id:id}).then((res)=>{
         alert("data deleted sucessfully")
         loaddata()
        })
    }


    const myedt=(id)=>{
           navigate(`/edit/${id}`)
    }


    const ans = val.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.sturoll}</td>
                <td>{key.stuname}</td>
                <td>{key.stucity}</td>
                <td>{key.stusubject}</td>
                <td>
                    <button onClick={()=>{mydel(key._id)}}>Delete</button>
                </td>

                <td>
                    <button  onClick={()=>{myedt(key._id)}}>Edit</button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        
        <h1>This is update page</h1>
        {ans}
        </>
    )
}


export default Update;