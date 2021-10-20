import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../imgaes/logo/logo.png';
import useAuth from '../../Hooks/useAuth/useAuth';

const Header = () => {
    const history = useHistory();
    const {user, logOut} = useAuth();

    // redirect to login
    const handleLogin = () => {
        history.push('/login');
    }
    // redirect to register
    const handleRegister = () => {
        history.push('/register');
    }
    return (
        /* Navbar for main menu */
        <>
            <Navbar lapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/home"><img  src={logo} alt="website logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/news">News</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                            {user?.email && <span className='text-primary fw-bold'>Welcome, {user?.displayName || user.email.substring(0, user.email.lastIndexOf("@"))}</span>}
                        </Navbar.Text>
                        {user?.email ?
                        <Button onClick={logOut} variant="primary">Logout</Button>
                        :
                        <>
                            <Button variant="primary" onClick={handleLogin}>Login</Button>
                            <Button variant="warning" onClick={handleRegister}>Register</Button>
                        </>  
                            }
                    </ Navbar.Collapse>
                </Container>
            </Navbar>
</>
    );
};

export default Header;