import React from 'react';
import { NavLink } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png'

const HeadingFeature = () => {
    return (
        <div>
              <>
        <div style={{width:"100%", height:"100%"}} className="container ">
          <div className="row d-flex align-items-center" >
            <div className="col-md-6 col-sm-12 mt-5 pt-5 ">
              <h1>Let's Grow Your <br/>Brand to the next Level</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vero quam ducimus, praesentium vel porro atque inventore iusto dicta molestiae!</p>
               <h1><span style={{ fontFamily:"cooper" ,color:"green", fontWeight:"500"}}>  </span></h1>
            <b></b> <br/> <NavLink className="btn btn-dark" to="#">Hire Us</NavLink>
            </div>
            <div className="col-md-6 animation">
            <img style={{width:"100%", height:"100%"}} className="img-fluid order-1 order-lg-2 pt-3 my-5" src={frame} alt="home"/>
            </div>
          </div>
        </div>
        
        </>
        </div>
    );
};                              
export default HeadingFeature;