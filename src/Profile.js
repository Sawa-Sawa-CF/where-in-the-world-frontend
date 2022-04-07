import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';

const Profile = ({ yelpDataForProfile }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();





  if (isLoading) {
    return <div>Loading ...</div>;
  }
  // console.log(this.props.yelpDataForProfile, 'yelp data for profile');
  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>


          {yelpDataForProfile && yelpDataForProfile.map((restaurant, idx) => {
            return (
              <Card style={{ width: '18rem' }} key={idx}>

                <Card.Img variant="top"
                  src={restaurant.image_url} />
                <Card.Body>
                  <Card.Title>{restaurant.name} </Card.Title>
                  <Card.Subtitle>{restaurant.rating}Stars</Card.Subtitle>
                  <Card.Text>
                    {restaurant.address1}, {restaurant.city}, {restaurant.state} {restaurant.zip_code}
                  </Card.Text>

                  <Button variant="primary" >Delete</Button>
                  <Button variant="primary" >Edit</Button>
                </Card.Body>
              </Card>

            )
          })}


        </div>

      )}
    </>
  );
}


export default Profile;