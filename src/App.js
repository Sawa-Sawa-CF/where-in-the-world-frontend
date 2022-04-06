import React from 'react';
import Login from './Login';
import Content from './Content';
import Profile from './Profile';
import Footer from './Footer';
import './App.css';
import './Header.css';
import Header from './Header'
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  loginHandler = (user) => {
    console.log(user);
    this.setState({
      user: user,
    }, () => console.log(this.state))
  }




  render() {
    const logoutUrl = this.props.auth0.buildLogoutUrl({returnTo: window.location.href});
    console.log(this.props.auth0.isAuthenticated);
    return (

      <div>
      <Router>
        <Header user={this.state.user} renderLogoutUrl={this.props.auth0.isAuthenticated} logoutUrl={logoutUrl} />
        <Switch>
          <Route exact path="/">
          <section>
            
          </section>
          {this.props.auth0.isAuthenticated ? <Content /> : 
            <Login loginHandler={this.loginHandler}></Login> }
          </Route>
          <Route exact path="/profile">

          <Profile user={this.state.user}>

          </Profile>
          </Route>
        </Switch>
        <Footer />
        
      </Router>
    </div> 
    )
  }
}

export default withAuth0(App);