import React from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Content from './Content.js';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {

  render() {
    console.log(this.props.isAuthenticated);
    return (
      <>
        <h1>Auth0</h1>
        {
          this.props.auth0.isAuthenticated
            ? <LogoutButton />
            : <LoginButton />
        }
        {
          this.props.auth0.isAuthenticated
            ? <Content/>
            : <h2>Please Log In</h2>
        }
      </>
    )
  }
}

export default withAuth0(App);