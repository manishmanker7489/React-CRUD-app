import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const[id,setid]=useState();
    const[name,setname]=useState("");
    const[email,setemail]=useState("");

    const history = useNavigate();

    useEffect(()=>{
        setid(localStorage.getItem("id"));
        setname(localStorage.getItem("name"));
        setemail(localStorage.getItem("email"));
    },[]);


    const handleupdate=(e)=>{
        if(name&&email){
            e.preventDefault();
            axios.put(`https://63ef15d6c59531ccf168b902.mockapi.io/crud-react-app/${id}`,{
              name:name,
              email:email})
          .then(()=>{  
             history('/read');
          });
        
        }         
          else{
            alert("enter name and email");
          }
         
        
      };
    




  return (
   <>
    <div className="container my-3">

    <h2>Update Page</h2>
    <Link to={"/"}><button className="btn btn-success my-3 mx-3">Create</button></Link>
    <Link to={"/read"}><button className="btn btn-success my-3 mx-3">Read</button></Link>

    <form  className='form1' onSubmit={handleupdate} >
          <div className="mb-3">
            <label  className="form-label">
              Name
            </label>
            <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)}/>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e)=>setemail(e.target.value)} />
            
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
         
          <button type="submit" className="btn btn-primary" >
            Update
          </button>
        </form> 
        </div>
   </>
  )

  }
export default Update
  