import React from 'react';
import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Food you Like</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile" className="nav-link">Profile</Link>
        </NavItem>
        {this.props.renderLogoutUrl &&
           <NavItem>
            <a href={this.props.logoutUrl} className="nav-link">Logout</a>
           </NavItem>
        }
        {this.props.user ? <NavItem><LogoutButton/></NavItem> : " "}
      
      </Navbar>
    )
  }
}

export default Header;