import React from 'react';
import  logo from'../../images/SocialLogo/thums.png'
const Checkout = () => {

    
    return (
        <div className='text-center mt-4 '>
              
            <h2 className='text-info fs-1 fw-bold'>Please checkout Your packages...</h2>
            <p className='fs-3 fw-bold'>Thank You for Joining our Gym</p>
            
             <img src={logo} alt="" />
   
        </div>
    );
};

export default Checkout;