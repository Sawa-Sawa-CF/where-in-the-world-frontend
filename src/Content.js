import React from 'react';
import axios from 'axios';
// import Profile from './Profile';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
import { withAuth0 } from "@auth0/auth0-react";
import YelpResult from './YelpResult';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yelpData: []
        }
    }

    getRestaurants = async () => {
        // // JSON Web Token = JWT (pronounced JOT)
        // if (this.props.auth0.isAuthenticated) {
            
        //     // get token:
        //     const res = await this.props.auth0.getIdTokenClaims();
            
        //     // MUST use double underscores
        //     const jwt = res.__raw;
        //     // a console.log of the token // this is as far as you need to go for the lab. Get the jwt to log to the console.

        //     // as per axios docs, we can send an config object to make our call as well
        //     const config = {
        //         method: 'get',
        //         baseURL: process.env.REACT_APP_SERVER,
        //         url: '/restaurants',
        //         headers: { "Authorization": `Bearer ${jwt}` }
        //     };
        //     const queryResults = await axios(config);
        //     console.log(queryResults.data.businesses);
        //     this.state.yelpData = queryResults.data.businesses;
        // }

        try{
            let restaurants = await axios.get(`${process.env.REACT_APP_SERVER}/restaurants`);
            this.setState({
                yelpData: restaurants.data
            })
            console.log(this.state.yelpData);
        }catch(error){
            console.log(`error message `, error);
        }
    }

    componentDidMount() {
        this.getRestaurants();
    }

    render() {
        return (
            <>
                <h1>City</h1>
                {this.state.yelpData.map((yelpResult, idx) =>
                    <YelpResult key={idx} item={yelpResult} />         
                )};
            </>
        );
    }
}

export default withAuth0(Content);