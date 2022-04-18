import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const serviceId= useParams();
    return (
        <div>
            <h2 className='text-center text-primary mt-4'>Your Service Detail:{serviceId}</h2>

           <div className='text-center mt-4'>
           <Link to="/checkout" > 
            
            <button className='btn btn-warning '>Confirm Checkout</button>
            
            </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;