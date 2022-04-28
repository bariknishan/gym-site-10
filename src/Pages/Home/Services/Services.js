import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
 import './Services.css' ;

const Services = () => {

    const [services, setServices] = useState([]);

    ////////// -------------data load fromhsin file--------------/////////////


    useEffect(() => {
        fetch('http://localhost:5000/service') // services,json
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);


        

    return (
        <div       id='services' className='mt-4'>
            <h1 className='text-center mt-5 text-primary fw-bold'>MY LATEST SERVICES 2022</h1>
          <div className="services-container  ">
          {
                services.map(service => <Service
                    key={service._id}
                    service={service}

                ></Service>)
            }
          </div>
        </div>
    );
};

export default Services;