import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Where in the World?</Navbar.Brand>
                <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
                <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
                <NavItem><Link to="/About Us" className="nav-link">About Us</Link></NavItem>
                {this.props.user ?
                    <>
                        <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
                        <NavItem><Link to="/LogoutButton" className="nav-link">Logout</Link></NavItem>
                        <NavItem><Link to="/LoginButton" className="nav-link">Login</Link></NavItem>
                    </>
                    :
                    <></>
                }
            </Navbar>
        );
    }
}

export default Header;