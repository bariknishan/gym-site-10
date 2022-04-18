
import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    let errorElement;
    // //////////////////-------------email -pass authentication -----------////////////////////////////
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail( auth );   // password reset



    //--------- error message---------//

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }


    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateToRegister = event => {
        navigate('/register')
    }

    // --------password reset system --------------//

  const resetPassword =  async ()=>{
  const email= emailRef.current.value ;
  if(email){
    await sendPasswordResetEmail(email)
    toast('sent email')
  }
    else{
        toast('Please Enter Email')
    }
  }

    //  -------------------- form are--------------------///

    return (

        <div className='log-container w-50 mx-auto mb-4'>
            <h2 className='text-primary text-center  mt-4 ' > LOG IN HERE</h2>

            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3 mt-4  " controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control className='p-2' ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='p-2' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
 

                <Button className='w-50 mx-auto mb-2 p-2 d-block' onClick={handleSubmit} variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            {errorElement}
            <p className='text-center' >New To Fitnes Mania? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateToRegister} >Register here?</Link></p>

            <p className='text-center' >Forget password? <button  className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword} >Reset password</button></p>
            <SocialLogin></SocialLogin>

            <ToastContainer />
        </div>
    );
};

export default Login;