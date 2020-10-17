import React from 'react';
import HeadingFeature from './HeadingFeature/HeadingFeature';
import Navbar from './Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HeadingFeature></HeadingFeature>
        </div>
    );
};

export default Header;