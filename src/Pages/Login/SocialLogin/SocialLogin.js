import React from 'react';
import googlepic from '../../../images/SocialLogo/google.png'
import facebookpic from '../../../images/SocialLogo/facejpg.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../SharedPage/Loading/Loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;


    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>


    }

    //// loading page 
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }




    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '2px' }} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50 '  ></div>
            </div>

            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning d-block w-50 text-center mx-auto my-4 '>
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