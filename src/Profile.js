import React from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      placeToUpdate: {},
      show: false,

    }

  }

  handleClose = () => this.setState({ show: false });

  // handleChange = (e) => {
  //   let currentPlace = 
  //   this.setState
  // ({ notes: e.target.value })
  // }



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

  changeShowModal = (place) => {
    console.log(place._id);
    // for (let i = 0; i < this.state.places.length; i++) {
    //   let currentPlace = this.state.places[i];
    //   if (currentPlace._id === place._id) {

    //   }
    // }
    console.log(place);
    this.setState({
      show: true,
      placeToUpdate: place,

    });

  }

  notesUpdated = (updatedNotes) => {
    let currentNotes = this.state.place.notes;
    currentNotes = updatedNotes;
    this.setState({ place: currentNotes });

  }

  handleUpdate = (newNotes) => {
    this.handleSubmit();
    let updatedPlace = this.state.placeToUpdate;
    console.log(updatedPlace, 'updatewdpalce');
    updatedPlace.notes = newNotes;
    // this.setState({
    //   placeToUpdate: updatedPlace,
    // })
    console.log(updatedPlace);
    this.updateSavedPlace(updatedPlace);


  };

  handleSubmit = async (e) => {
   e.preventDefault();
   let updateText = e.target.FormText.value;
   this.state.placeToUpdate.notes = updateText;
   this.setState({
     show: false,
   })
   let response = await axios.put(`${process.env.REACT_APP_SERVER}/restaurants/${this.state.placeToUpdate._id}`, this.state.placeToUpdate);
   console.log(response.data);
   this.getSavedPlaces();
   
  }












  render() {
    return (
      <>


        {/* 
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
                  <Button className='button' variant="primary" onClick={() => this.changeShowModal(restaurant)} >Edit</Button>
                </Card.Body>
              </Card>

            )
          })}
        </div> */}

        {
          this.state.show ?
            (

              <Modal
                show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Hello</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>
                      Type your notes here
                    </Form.Label>
                    <Form.Control id='FormText' type="text" >

                    </Form.Control>
                    <Button className='button' variant="primary" type="submit"  >Edit</Button>
                    {/* onClick={() => this.handleUpdate(this.state.placeToUpdate.notes)} */}
                  </Form.Group>
                  </Form>
                </Modal.Body>

              </Modal>

            ) :
            (
              <div className='card-container' >

                {this.state.places && this.state.places.map((restaurant, idx) => {
                  return (
                    <Card className="restaurants" style={{ width: '18rem' }} key={idx}>

                      <Card.Img className='img' variant="top"
                        src={restaurant.image_url} />
                      <Card.Body>
                        <Card.Title>{restaurant.name} </Card.Title>
                        <Card.Subtitle>{restaurant.rating} Stars⭐</Card.Subtitle>
                        <Card.Text>
                          {restaurant.address1}, {restaurant.city}, {restaurant.state} {restaurant.zip_code} 
                          <br></br>
                          Notes: {restaurant.notes}
                          
                        </Card.Text>
                        <Button className='button' variant="primary" onClick={() => this.deleteSavedPlace(restaurant)} >Delete</Button>
                        <Button className='button' variant="primary" onClick={() => this.changeShowModal(restaurant)} >Edit</Button>
                      </Card.Body>
                    </Card>

                  )
                })}
              </div>
            )
        }



      </>)

  }
}


export default Profile;