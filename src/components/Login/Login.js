import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <div className='text-center'>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Your name' /><br />
                <input type="password" placeholder='Your Email' /><br />
                <input type="submit" value="Login" />
            </form>
            <br />
            <p>New here? <Link to='/register'>create an account</Link></p>
            <div>-----------or-----------</div>
            <button onClick={signInUsingGoogle}>Sign in with google</button>
        </div>
    );
};

export default Login;