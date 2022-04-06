import React from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Content from './Content.js';
import Profile from './Profile';
import Footer from './Footer';
import './App.css';
import './Header.css';
import Header from './Header'
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        {
          this.props.auth0.isAuthenticated
            ? <LogoutButton />
            : <LoginButton />
        }
        {
          this.props.auth0.isAuthenticated
            ?
            <Router>
              <Header user={this.state.user} onLogout={this.logoutHandler} />
              <Routes>
                <Route exact path="/">
                  {this.props.auth0.isAuthenticated ? <Content user={this.state.user} /> : <h2>Please Log In</h2>}
                </Route>
                <Route exact path="/Profile">
                  <Profile userInfo={this.state.user} />
                </Route>
                <Route exact path="/LoginButton">
                </Route>
                <Route exact path="/LogoutButton">
                  <LogoutButton onLogout={this.logoutHandler} />
                </Route>
              </Routes>
              <Footer />
            </Router>
            : <h2>Please Log In to </h2>
        }
      </>


    )
  }
}

export default withAuth0(App);