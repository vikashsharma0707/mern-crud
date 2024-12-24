import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ProductDetail=()=>{

    const {mypro} =useParams()

    const [val,setval]=useState({})

    const loaddata=()=>{
        let api="https://mern-crud-bszv.onrender.com/student/productDetail"
        axios.post(api,{id:mypro}).then((res)=>{
          setval(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    },[])



    return(
        <>
        <h1>This is product detail page</h1>
        <h1>{val.sturoll}</h1>
        <h1>{val.stuname}</h1>
        <h1>{val.stucity}</h1>
        <h1>{val.stusubject}</h1>
        
        </>
    )
}

export default ProductDetail;