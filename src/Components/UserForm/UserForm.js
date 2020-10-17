
import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './UserForm.css'

const UserForm = () => {
    const [loggedInUser , setLoggedInUser] =  useContext(UserContext)
    const {volunteer} = useParams();
    const handleSubmit = ()=>{
      const  newRegistration = {...loggedInUser}
      fetch('http://localhost:5000/addService',{
          method:"POST",
          headers:{"Content-Type":'application/json'},
          body:JSON.stringify(newRegistration)
      })
      .then(res => res.json())
      .then(data=> console.log(data))
    }
    return (
        <div>
            <div className="registration-form">
                    <form onSubmit={()=>handleSubmit()} >
                        <strong><span>Order</span></strong>
                          <br/>
                        <input  type="text" name="name" placeholder="Your name/Company's name"className="form-input" value={loggedInUser.name}  required/>
                          <br/>
                        <input  type="email" name="email" placeholder="Your Email" className="form-input" value={loggedInUser.email} required/>
                         <br/>
                        <input  type="text" name="date" className="form-input" placeholder="Project" required/>
                        <input  type="text" name="description" className="form-input" placeholder="Project Details" required/>
                         <input  type="text" name="password" className="form-input" placeholder="price" value={volunteer} required/>
                        <br/>
                        <Nav.Link className="submit-btn" href="/item">Submit</Nav.Link>  
                    </form>
                </div>  
            </div>
    );
};
export default UserForm;