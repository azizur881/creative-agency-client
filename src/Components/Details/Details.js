import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
const{serve} = useParams()
    return (
        <div>
         <h1>hello you seeing {serve}</h1>
        </div>
    );
};

export default Details;