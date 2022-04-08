import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css';
class Content extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
      
         }
    }
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
            <section className='card-container'>
                {
                    this.props.yelpData
                        ?
                        this.props.yelpData.map((restaurantData, idx) =>
                        <Card className='restaurants'style={{ width: '18rem' }} key={this.props.yelpData.indexOf(restaurantData)}>
                                <Card.Img className='img' variant="top"
                                    src={restaurantData.image_url} />
                                <Card.Body>
                            <Button className='button' variant="primary" onClick={() => this.handleAddButton(restaurantData)}>Add</Button>
                                    <Card.Title>{restaurantData.name} </Card.Title>
                                    <Card.Subtitle>{restaurantData.rating} Stars⭐</Card.Subtitle>
                                    <Card.Text>
                                        {restaurantData.address1}, {restaurantData.city}, {restaurantData.state} {restaurantData.zip_code}
                                    </Card.Text>
                                </Card.Body>
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