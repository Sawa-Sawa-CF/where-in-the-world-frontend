import React from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Content from './Content.js';
import './App.css';
import './Header.css';
import Header from './Header'
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: null
    }
  }

  


  render() {
    console.log(this.props.auth0.isAuthenticated);
    return (
    
      
      <>
      <Header/>
        {
          this.props.auth0.isAuthenticated
            ? <LogoutButton />
            : <LoginButton />
        }
        {
          this.props.auth0.isAuthenticated
            ? <Content/>
            : <h2>Please Log In to </h2>
        }
      </>
     
      
    )
  }
}

export default withAuth0(App);