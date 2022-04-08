import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faMap } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faCompass, faMap);


class Header extends React.Component {
  render() {
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className='header-begin-icon'><FontAwesomeIcon icon='far fa-compass' /></div>
        <Navbar.Brand className='header-title'>Oh the Places I'll Go!</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        {this.props.isAuthenticated && <React.Fragment>
          <NavItem>
            <Link to="/profile" className="nav-link">Profile</Link>
          </NavItem>
          <NavItem>
            <Link to="/AboutUs" className="nav-link">About Us</Link>
          </NavItem>
          <NavItem>
            <a href={this.props.logoutUrl} className="nav-link">Logout</a>
          </NavItem></React.Fragment>
        }
        <div className='header-end-icon'><FontAwesomeIcon icon='far fa-map' /></div>
      </Navbar>
      
    )
  }
}
export default Header;