import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from "@auth0/auth0-react";

class YelpResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <div>{this.props.item.name}</div>
          <div>{this.props.item.rating}</div>
          <div>{this.props.item.location.address1} {this.props.item.location.city}, {this.props.item.location.state} {this.props.item.location.zip_code}</div>
        </div>
      </>
    );
  }

}

export default withAuth0(YelpResult);