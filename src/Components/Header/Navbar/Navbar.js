import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'
const Navbar = () => {
    return (
        <div>
                      
      <nav className="navbar navbar-expand-lg navbar-light container">
  <img className="logo" src={logo} alt=""/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <NavLink className="nav-link active" to="/">Home <span class="sr-only">(current)</span></NavLink>
      <NavLink className="nav-link" to="/userform">Order</NavLink>
      <NavLink className="nav-link" to="/#">Our Team</NavLink>
      <NavLink className="nav-link " to="/#" >Contact Us</NavLink>
      <Link to="/login"><button className="btn btn-dark" style={{padding:'5px 35px'}}>Login</button></Link>  
      </div>
    </div>
  </nav>
</div>);
};

export default Navbar;