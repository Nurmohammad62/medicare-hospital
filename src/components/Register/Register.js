import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';


const Register = () => {
    const {signInUsingGoogle} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = (e) => {
        console.log(email, password);
        e.preventDefault();
    }
    return (
            <div className='text-center'>
                <h1>Please register for a new account</h1>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmail} type="text" placeholder='Write Your Name' /><br />
                    <input onBlur={handlePassword} type="password" placeholder='Enter Your Email' /><br />
                    <input type="submit" value="Register" />
                </form>
                <br />
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <br />
                <br />
                <div>-----------or----------</div>
                <br />
                <button onClick={signInUsingGoogle}>SignIn with google</button>
            </div>
    );
};

export default Register;