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
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

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
        <Header 
        user={this.state.user} onLogout={this.logoutHandler}
         />
        

      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height:'90vh'}}> 
          <section>
            {
            this.props.auth0.isAuthenticated
            ? <LogoutButton />
            : 
            <>
            <h1>Sign in with Auth0</h1>
            <LoginButton />
            </>
            }
          </section>
          
          {
            this.props.auth0.isAuthenticated
            ?
            <Router>
                <Routes>
                  <Route exact path="/">
                    {this.props.auth0.isAuthenticated ? <Content user={this.state.user} /> : <h2>Please Log In</h2>}
                  </Route>
                  <Route exact path="/Profile">
                    <Profile userInfo={this.state.user} />
                  </Route>
                  <Route exact path="/LoginButton">
                    {/* <LoginForm loginHandler={this.setLogin} /> */}
                  </Route>
                  <Route exact path="/LogoutButton">
                    <LogoutButton onLogout={this.logoutHandler} />
                  </Route>
                </Routes>
              </Router>
              : 
              <>
              </>
            }
      </div>
      <Footer/>
        </>


    )
  }
}

export default withAuth0(App);