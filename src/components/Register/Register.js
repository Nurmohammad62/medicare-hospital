import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';


const Register = () => {
    const {registrationUsingEmailPassword, signInUsingGoogle, error, setError} = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = (e) => {
        console.log(name, email, password);
        e.preventDefault();
        registrationUsingEmailPassword(name, email, password)
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
            <Container>
                <Row>
                    <Col className='mx-auto' lg={4}>
                        <div className='login'>
                            <h1 className='text-primary'>Please register for a new account</h1>
                            <form onSubmit={handleRegistration}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName" className="form-label">User Name</label>
                                    <input onBlur={handleName} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                            <p className='text-danger'>{error}</p>
                            <br />
                            <p>Already have account? <Link to='/login'>Login</Link></p>
                            <div>-----------or-----------</div>
                            <button className='btn btn-primary' onClick={signInUsingGoogle}>Sign in with google</button>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default Register;