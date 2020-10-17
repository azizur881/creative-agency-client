import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/icons/service1.png'
import img2 from '../../images/icons/service2.png'
import img3 from '../../images/icons/service3.png'

const Service = (props) => {
    console.log(props);
    const cardStyle={
        width:"74px",
        height:"74px",
        margin:"auto"
    }
    return (
    <div className="container" >
         <h3 className="text-center" style={{margin:"45px"}}>  We Provide Awesome Service</h3>
        <div className="row text-center d-flex justify-content-center">
            <div className="col-md-4">
            <div class="card my-5" style={{boxShadow:"black 5px 5px 20px"}}>
            <img src={img1} style={cardStyle} class="card-img-top" alt="..."/>
            <div className="card-body" >
             <Link to="/service/"> <h4>Web and Mobile Design</h4></Link>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
                        </div>
            <div className="col-md-4">
            <div class="card my-5" style={{boxShadow:"black 5px 5px 20px"}}>
            <img src={img2}style={cardStyle} class="card-img-top" alt="..."/>
            <div className="card-body">
            <h4>Graphic Design</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
 </div>
           <div className="col-md-4">
           <div class="card my-5" style={{boxShadow:"black 5px 5px 20px"}}>
  <img src={img3} style={cardStyle} class="card-img-top" alt="..."/>
  <div className="card-body">
  <h4>Web Development</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
         </div>
            </div>
        </div>
    </div>
        
    );
};

export default Service;