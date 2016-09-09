import React from 'react';
import { Image, Thumbnail, Button } from 'react-bootstrap';
import DirectionButton from './DirectionButton'
var FoodResult = (props) => (
    <div className='food-result'>
        <Thumbnail src={props.foodType.value.image}>
            <h3>{props.result.restaurant_name}</h3>
            <div>{props.result.address}</div>
            <div>{props.result.location_name} {props.result.zipcode}</div>

            <h3>Spinfish Poke House</h3>
            <div>808 Wilshire Blvd #100, Santa Monica, CA</div>
            <div>{props.result.location_name} 90401</div>

            <DirectionButton />
        </Thumbnail>
    </div>
);

export default FoodResult;
