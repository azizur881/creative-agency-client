import React from 'react';
import Feedback from '../Feedback/Feedback'
import Client from '../Client/Client';
import Header from '../Header/Header';
import Service from '../Service/Service';
import ServiceData from '../Service/ServiceData';
import Slide from '../Slide/Slide';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <Client></Client>
        <Service></Service>
        <Slide></Slide>
   <Feedback></Feedback>
   <Footer></Footer>
        </div>
    );
};

export default Home;