import React from 'react';
import slack from '../../images/logos/slack.png'
import airbnb from '../../images/logos/airbnb.png'
import netflix from '../../images/logos/netflix.png'
import uber from '../../images/logos/uber.png'
import google from '../../images/logos/google.png'

const Client = () => {
    const style={
        width:"130px",
        height:"46"
    }
    return (
        
            <div style={{display:'flex',overflowY:'hidden',marginTop:"30px"}}className="container">
                <div >
                    <img style={style} src={slack} alt=""/>
                </div>
                <div className="col-md-3">
                    <img style={style} src={airbnb} alt=""/>
                </div>
                <div className="col-md-3">
                    <img style={style} src={netflix} alt=""/>
                </div>
                <div className="col-md-3">
                    <img style={style} src={uber} alt=""/>
                </div>
            </div>
        
    );
};

export default Client;