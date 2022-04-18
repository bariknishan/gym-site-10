import './Register.css';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import auth from '../../../../public/Firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }

    const navigateToLogin = () => {
        navigate('/login')
    }
   if (user) {
       navigate('/home')
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" id="" name="email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id="" name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="register" value="register" >
                    Register
                </Button>
            </Form>

            <p > Have an Account ?<Link to='/login' onClick={navigateToLogin} className='text-danger pe-auto text-decoration-none'  >LoginHere?</Link></p>

        </div>
    );
};

export default Register;