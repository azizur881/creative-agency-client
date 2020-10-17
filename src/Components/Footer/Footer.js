import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="row container  justify-content-center ">
                    <div className="col-md-6 container d-flex align-items-center">
                        <h2>Let's us handle <br/>
                        Your project,with professional</h2>
                        <br/>
              
                    </div>
                  
                  <div className="col-md-6">
                  <form action="">
                        <label>
                            <input className="input" type="text" placeholder="Your Email Address"/><br/>
                            <br/>
                            <input className="input"  type="text" name="" id="" placeholder="Your Name/Company's name"/><br/>
                            <br/>
                            <input  className="message"  type="text" name="" id="" placeholder="Your Message"/>
                        </label>
                     
                    </form>
                    <button className='btn btn-dark'>Send</button>
                  </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;