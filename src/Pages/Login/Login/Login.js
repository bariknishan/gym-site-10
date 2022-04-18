
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);






    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
       signInWithEmailAndPassword(email,password)
    }

    if(user){
        navigate('/home')
    }

    const navigateToRegister = event => {
        navigate('/register')
    }




    return (

        <div className='log-container w-50 mx-auto mb-4'>
            <h2 className='text-primary text-center  mt-4 ' > LOG IN HERE</h2>

            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3 mt-4 " controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    <p >New To Fitnes Mania? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateToRegister} >Register here?</Link></p>

        </div>
    );
};

export default Login;