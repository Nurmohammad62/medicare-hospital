import React, { useState } from 'react';
import './login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {
    const {loginUsingEmailPassword, signInUsingGoogle, error, setError} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        loginUsingEmailPassword(email, password);
    }
    return (
        <Container>
            <Row>
                <Col className='mx-auto' lg={4}>
                <div className='login'>
                    <h1 className='text-primary'>Please Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <p className='text-danger'>{error}</p>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <br />
                    <p>New here? <Link to='/register'>create an account</Link></p>
                    <div>-----------or-----------</div>
                    <button className='btn btn-primary' onClick={handleGoogleSignIn}>Sign in with google</button>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;