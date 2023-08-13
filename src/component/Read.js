import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Read = () => {

    const [data,setdata] = useState([]);

    const getdata=()=>{
        axios.get("https://63ef15d6c59531ccf168b902.mockapi.io/crud-react-app")
        .then((res)=>{
            setdata(res.data);
            
        })

    }

    useEffect(()=>{
        getdata();
    },[]);

    const setlocaldata=(id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    }


 const remove=(id)=>{
    axios.delete(`https://63ef15d6c59531ccf168b902.mockapi.io/crud-react-app/${id}`)
    .then(()=>{
        getdata();
    })
  }






  return (
    <>
      <div className="container my-3">
        <h2>Read operation</h2>

        <Link to={"/"}><button className="btn btn-success my-3 mx-3">Insert Data</button></Link>
        

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          
          {
            data.map((e) =>{
                return(
                    <>
                    <tbody >
                <tr >
                    <th scope="row">{e.id}</th>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>
                    <Link to={"/update"}> <button className="btn btn-success"  onClick={()=>setlocaldata(e.id,e.name,e.email)}>Edit</button></Link>
                    </td>
                    
                    <td><button className="btn btn-danger" onClick={()=>remove(e.id)} >Delete</button></td>
                </tr>
            </tbody>
                    </>
                )
            

            })
          }
            

        </table>
      </div>
    </>
  );
};

export default Read;
