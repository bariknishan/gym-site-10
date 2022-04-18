import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const {serviceId}= useParams()
    return (
        <div className='text-center mt-4 '>
            <h2>You have selecteed package no:{serviceId}</h2>
            <p> Thank you for visiting Our website...</p>
        </div>
    );
};

export default Checkout;