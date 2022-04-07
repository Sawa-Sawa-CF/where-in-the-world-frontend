import React from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],

    }

  }
  getSavedPlaces = async () => {
    try {
      let savedPlaces = await axios.get(`${process.env.REACT_APP_SERVER}/savedRestaurants`);
      
      this.setState({
        places: savedPlaces.data
      })
    } catch (error) {
      console.log(`error message `, error);
    }
  }


  componentDidMount() {
     this.getSavedPlaces();
  }

  deleteSavedPlace = async (place) => {
      await axios.delete(`${process.env.REACT_APP_SERVER}/restaurants/${place._id}`);
      this.getSavedPlaces();
  }

  updateSavedPlace = async (place) => {
    await axios.put(`${process.env.REACT_APP_SERVER}/restaurants/${place._id}`, place);
    this.getSavedPlaces();
}





  render() {
    return (
      <>



        <div className='card-container' >

        {this.state.places && this.state.places.map((restaurant, idx) => {
          return (
            <Card className="restaurants" style={{ width: '18rem' }} key={idx}>

              <Card.Img className='img' variant="top"
                src={restaurant.image_url} />
              <Card.Body>
                <Card.Title>{restaurant.name} </Card.Title>
                <Card.Subtitle>{restaurant.rating}Stars</Card.Subtitle>
                <Card.Text>
                  {restaurant.address1}, {restaurant.city}, {restaurant.state} {restaurant.zip_code}
                </Card.Text>
                <Button className='button' variant="primary" onClick={() => this.deleteSavedPlace(restaurant)} >Delete</Button>
                <Button className='button' variant="primary" >Edit</Button>
              </Card.Body>
            </Card>

          )
        })}
        </div>





      </>
    );
  }
}


export default Profile;