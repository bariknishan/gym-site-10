import React from 'react';
import './Service.css'

const Service = ({service}) => {

const { img, name, price ,description}= service ;

    return (
        <div className='service mt-4'>
            <img className='w-100  h-50' src={img} alt="" />
            <h2 className='mt-4 fw-bold' >{name}</h2>
             <p>PRICE:{price}BDT</p>
             <p className='fs-5' >{description}</p>
             <button className='btn  bg-warning p-2 mb-4'>Book This Packages</button>
        </div>
    );
};

export default Service;