import React from 'react';
import googlepic from '../../../images/SocialLogo/google.png'
import facebookpic from '../../../images/SocialLogo/facejpg.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '2px' }} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50 '  ></div>
            </div>
            <div>
                <button className='btn btn-warning d-block w-50 text-center mx-auto my-4 '>
                <img src={googlepic} alt="" />
                    
                   <span className='px-2 fw-bold '>Sign With Google </span> 
                </button>
                <button className='btn btn-primary d-block w-50 text-center mx-auto '>
                <img src={facebookpic} alt="" />
                    
                   <span className='px-2 fw-bold '>Sign With Facebook </span> 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;