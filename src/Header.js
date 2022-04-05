import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Where in the World?</Navbar.Brand>
                <NavItem>Home</NavItem>
                <NavItem>Profile</NavItem>
                <NavItem>About Us</NavItem>
                
                {this.props.user ?
                    <>
                        <NavItem></NavItem>
                    </>
                    :
                    <></>
                }
            </Navbar>
        );
    }
}

export default Header;