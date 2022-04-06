import React from 'react';
import Login from './Login';
import Content from './Content';
import Profile from './Profile';
import Footer from './Footer';
import axios from 'axios';
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
      user: null,
      yelpData: null,
      yelpDataForProfile: []
    }
  }

  loginHandler = (user) => {
    console.log(user);
    this.setState({
      user: user,
    }, () => console.log(this.state))
  }

  getRestaurants = async (city, food) => {
    try {
        let restaurants = await axios.get(`${process.env.REACT_APP_SERVER}/restaurants?location=${city}&term=${food}`);
        console.log(restaurants);
        this.setState({
            yelpData: restaurants.data
        })
    } catch (error) {
        console.log(`error message `, error);
    }
}


postRestaurants = async (newRestaurant) => {
  try {
      let dataToPost = await axios.post(`${process.env.REACT_APP_SERVER}/restaurants`, newRestaurant);
      console.log(dataToPost.data, 'dataToPost'); 
      this.setState({
      yelpDataForProfile: [...this.state.yelpDataForProfile, dataToPost.data]
  })
  console.log(`${newRestaurant.name} added to yelpDataForProfile`);
} catch(error) {
  console.log('we have an error: ', error.response.data)
}
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
          {this.props.auth0.isAuthenticated ? 
          <Content 
          yelpData={this.state.yelpData}
          yelpDataForProfile={this.state.yelpDataForProfile}
          getRestaurants={this.getRestaurants}
          postRestaurants={this.postRestaurants}
          
          /> : 
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