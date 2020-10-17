import React from 'react';
import Service from '../Service/Service';
import Data  from '../../Data/users'

const ServiceData = () => {
 
    return (
        <div>
           {
               Data.map(serve => <Service serve={serve}></Service>)
           }
        </div>
    );
};

export default ServiceData;