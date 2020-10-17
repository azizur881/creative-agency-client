import React from 'react';
import customer1 from '../../images/customer-1.png'
import customer2 from '../../images/customer-2.png'
import customer3 from '../../images/customer-3.png'

const Feedback = () => {
    const cardStyle={
        width:"74px",
        height:"74px",
        margin:"auto"
    }
    return (
        <div>
            <div className="container" >
         <h3 className="text-center" style={{margin:"45px"}}> Client's Feedback</h3>
        <div className="row text-center d-flex justify-content-center">
            <div className="col-md-4">
            <div class="card my-5" style={{boxShadow:"black 5px 5px 20px"}}>
            <img src={customer1} style={cardStyle} class="card-img-top" alt="..."/>
            <div className="card-body" >
            <h4>Nasha Patric</h4>
            <span>CEO</span>
                <p className="card-text">I'm fully satisfy on their service and they are eager to hear our desire</p>
            </div>
            </div>
                        </div>
            <div className="col-md-4">
            <div class="card my-5" style={{boxShadow:"black 5px 5px 20px"}}>
            <img src={customer2}style={cardStyle} class="card-img-top" alt="..."/>
            <div className="card-body">
            <h4>Marriam Barron</h4>
            <span>CEO</span>
            <p className="card-text">I've took service from many agencies but they are exceptional,they are awesome.</p>
            </div>
            </div>
 </div>
           <div className="col-md-4">
           <div class="card my-5" style={{boxShadow:"black 5px 5px 20px"}}>
  <img src={customer3} style={cardStyle} class="card-img-top" alt="..."/>
  <div className="card-body">
  <h4>Bria Malone</h4>
  <span>Marketing Officer</span>
    <p className="card-text">I will give 5 star cause they provide me best service.Its really fit  for my brand</p>
             </div>
         </div>
            </div>
            </div>
            </div>
                </div>
    );
};

export default Feedback;