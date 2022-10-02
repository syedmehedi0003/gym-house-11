import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
    // navbar navbar-dark bg-dark
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand className='text-warning' as={Link} to="/">
                    <img className='logo' src={logo} alt="" />
                    Gym House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <>
                                <Nav.Link as={Link} to="manageproduct">Manage Item</Nav.Link>
                                <Nav.Link as={Link} to="addproduct">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                            </>

                        }
                        {
                            user ?
                                <button className='btn btn-link text-decoration-none text-danger' onClick={handleLogOut}>Log Out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;

