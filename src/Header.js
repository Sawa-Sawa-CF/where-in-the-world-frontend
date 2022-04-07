import React from 'react';
import LogoutButton from './LogoutButton';
import { NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-title'>Food you Like</div>
        <div className='header-nav'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>
        <div className='header-logout'>
          {this.props.renderLogoutUrl ?
            <NavItem>
              <a href={this.props.logoutUrl} className="nav-link">Logout</a>
            </NavItem>
            : " "
          }
          {this.props.user ? <NavItem><LogoutButton /></NavItem> : " "}
        </div>
      </div >
    )
  }
}

export default Header;