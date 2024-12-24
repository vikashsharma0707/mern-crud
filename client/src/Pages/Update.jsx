import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductDetail from "./ProductDetail";

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
        let api="https://mern-crud-2-w2q5.onrender.com/studentDelete"
        axios.post(api,{id:id}).then((res)=>{
         alert("data deleted sucessfully")
         loaddata()
        })
    }


    const myedt=(id)=>{
           navigate(`/edit/${id}`)
    }

    const mypro=(id)=>{
        navigate(`/product/${id}`)
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

                <td>
                    <button  onClick={()=>{mypro(key._id)}}>Edit</button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        
        <h1>This is update page</h1>
        {ans}


        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ProductDetail/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
        </>
    )
}


export default Update;