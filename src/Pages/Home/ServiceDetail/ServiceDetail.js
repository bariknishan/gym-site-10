import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const{ serviceId}= useParams();
    const [service, setService]= useState({});
    useEffect(()=>{

        const url= `http://localhost:5000/service/${serviceId}`

        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return (
        <div className='bg-info w-50 mx-auto p-4 mt-4'>
            <h2 className='text-center text-primary mt-4'>Your Service Detail:{service.name}</h2>

           <div className='text-center mt-4'>
           <Link to="/checkout" > 
            
            <button className='btn btn-warning '>Confirm Checkout</button>
            
            </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;