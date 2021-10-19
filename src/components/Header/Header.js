import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../imgaes/logo/logo.png';
import useAuth from '../../Hooks/useAuth/useAuth';

const Header = () => {
    const history = useHistory();

    const {user, logOut} = useAuth();
    const handleLogin = () => {
        history.push('/login');
    }
    return (
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
                            {user?.email && <span>Welcome, {user?.displayName}</span>}
                        </Navbar.Text>
                        {user?.email ?
                        <Button onClick={logOut} variant="primary">Logout</Button>
                        :
                        <Button variant="primary" onClick={handleLogin}>Login</Button>}
                    </ Navbar.Collapse>
                </Container>
            </Navbar>
</>
    );
};

export default Header;