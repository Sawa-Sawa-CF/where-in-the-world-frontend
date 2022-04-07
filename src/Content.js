import React from 'react';
// import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css';
// import Profile from './Profile';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import { withAuth0 } from "@auth0/auth0-react";
// import YelpResult from './YelpResult';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yelpData: [],
            yelpDataForProfile: []
        }
    }

    // getRestaurants = async (city, food) => {
    //     try {
    //         let restaurants = await axios.get(`${process.env.REACT_APP_SERVER}/restaurants?location=${city}&term=${food}`);
    //         console.log(restaurants);
    //         this.setState({
    //             yelpData: restaurants.data
    //         })
    //     } catch (error) {
    //         console.log(`error message `, error);
    //     }
    // }


    performSearch = (e) => {
        e.preventDefault();
        const city = e.target.City.value;
        const food = e.target.Food.value;

        console.log(city);
        console.log(food);
        this.props.getRestaurants(city, food);
    }


    handleAddButton = (restaurant) => {
        // this.state.yelpDataForProfile.push(restaurant);
        console.log('updated state after add button pressed: ', this.props.yelpDataForProfile);
        console.log('restaurant passed in to button: ', restaurant);
        this.props.postRestaurants(restaurant);

    }


    //     postRestaurants = async (newRestaurant) => {
    //         try {
    //             let dataToPost = await axios.post(`${process.env.REACT_APP_SERVER}/restaurants`, newRestaurant);
    //             console.log(dataToPost.data, 'dataToPost'); 
    //             this.setState({
    //             yelpDataForProfile: [...this.state.yelpDataForProfile, dataToPost.data]
    //         })
    //         console.log(`${newRestaurant.name} added to yelpDataForProfile`);
    //     } catch(error) {
    //         console.log('we have an error: ', error.response.data)
    //     }
    // }

    // componentDidMount() {
    //     this.getRestaurants();
    // }

    render() {
        console.log('updated state after add button pressed: ', this.props.yelpDataForProfile);
        return (
            <>
                <section className='form-section'>
                    <Form onSubmit={this.performSearch}>
                        <Form.Group controlId="City">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="Food">
                            <Form.Label>Food</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
                </section>





                {/* <Accordion defaultActiveKey='0'>
                       
                       {this.state.yelpData.map((restaurantData, idx) => {
                            return(
                                  <Accordion.Item eventKey={idx}>
                                <Accordion.Header>{restaurantData.name}</Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <img src={restaurantData.image_url}> </img>
                                    </div>
                                    <p>{restaurantData.rating}</p>
                                    <p>{restaurantData.address1}</p>
                                    <p>{restaurantData.city}</p>
                                    <p>{restaurantData.state}</p>
                                    <p>{restaurantData.zip_code}</p>
                                    <p>{restaurantData.notes}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            )
                        })}
                    </Accordion> */}

                <section className='card-container'>

                    {
                        this.props.yelpData
                            ?

                            this.props.yelpData.map((restaurantData, idx) =>
                                <Card className='restaurants' style={{ width: '18rem' }} key={this.props.yelpData.indexOf(restaurantData)}>
                                    <Card.Img className='img'
                                        src={restaurantData.image_url} />
                                    <section style={{width:'fit fit-content'}}>
                                        <Card.Body>
                                        <Card.Title>{restaurantData.name} </Card.Title>
                                        <Card.Subtitle>{restaurantData.rating}Stars</Card.Subtitle>
                                        <Card.Text>
                                            {restaurantData.address1}, {restaurantData.city}, {restaurantData.state} {restaurantData.zip_code}
                                        </Card.Text>
                                    
                                    
                                        <section className='Button'>
                                            <Button class="btn btn-primary" type="button" onClick={() => this.handleAddButton(restaurantData)}>Add</Button>
                                        </section>

                                    </Card.Body>
                                    </section>
                                </Card>

                            )

                            :
                            <></>
                    }
                </section>

            </>
        );
    }
}

export default Content;