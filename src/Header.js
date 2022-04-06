import React from 'react';
import { Navbar, Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Where In The World?
                    </Navbar.Brand>
                <Nav.Link to='/'>Home</Nav.Link>
                <Nav.Link to='/about'>About Us</Nav.Link>

                    
                </Container>       
                {this.props.user ?
                    <>
                        <Nav.Link>
                            <LogoutButton/>
                        </Nav.Link>
                        <Nav.Link to='/Profile'>Profile</Nav.Link>
                    </>
                    :
                    <></>
                }
            </Navbar>
        );
    }
}

export default Header;