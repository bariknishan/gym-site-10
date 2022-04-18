import './Register.css';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

// import auth from '../../../../public/Firebase.init';

const Register = () => {

    const [agree, setAgree] = useState(false)

    /////////// email verification //////////////
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    ////// update  name/////////

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);




    const navigate = useNavigate()


    if (user) {
        console.log('user', user)
     }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
     

      
         await   createUserWithEmailAndPassword(email, password);
         await updateProfile({ displayName: name  });
         console.log('Updated profile');
         navigate('/home')

    }



    const navigateToLogin = () => {
        navigate('/login')
    }
  




    return (
        <div className='register-container w-50 mx-auto mb-4'  >
            <h2 className='text-center mt-4'>Please Register Here</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName" id="" required   >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" id="" name="name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" id=""  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" id="" name="email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id="" name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    <Form.Check className={`ps-2 ${agree ? '' : 'text-danger '}`} onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and condition?" id="terms" name="terms" />
                </Form.Group>
                <Button
                    disabled={!agree}
                    className=' w-50 mx-auto mb-2 p-2 d-block' variant="primary" type="register" value="register" >
                    Register
                </Button>
            </Form>

            <p > Have an Account ?<Link to='/login' onClick={navigateToLogin} className='text-danger pe-auto text-decoration-none'  >LoginHere</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;