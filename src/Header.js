import React from 'react';
// import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Oh the Places I'll Go!</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        {this.props.isAuthenticated && <React.Fragment><NavItem>
          <Link to="/profile" className="nav-link">Profile</Link>
        </NavItem>
          <NavItem>
            <a href={this.props.logoutUrl} className="nav-link">Logout</a>
          </NavItem></React.Fragment>
        }
        

      </Navbar>
    )
  }
}

export default Header;