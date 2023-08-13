import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Create = () => {

  const [name,setname]=useState("")
  const [email,setemail]=useState("")

  const history = useNavigate();

  const header = {"Access-Control-Allow-Origin":"*"};

  const handleSubmit=(e)=>{

    if(name&&email){
      e.preventDefault();
   
      axios.post("https://63ef15d6c59531ccf168b902.mockapi.io/crud-react-app",{
        name:name,
        email:email},{
      headers:header
    })
    .then(()=>{
      setemail("");
      setname("");  
       history("/read");
    });
  
  }
    else{
      alert("enter name and email");
    }
   
  
};

  
  return (
    <>
    
      <div className="container   my-3 ">
      <h2 className="my-2">Create</h2>
      <Link to={"/read"}><button className="btn btn-success my-3 mx-3">Show Data</button></Link>
   
        
        <form  className='form1' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  className="form-label">
              Name
            </label>
            <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)} />
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
         
          <button type="submit" className="btn btn-primary"  >
            Submit
          </button>
        </form>

       
      </div>
    </>
  );
};

export default Create;
