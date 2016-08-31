import React from 'react';
import { Image, Thumbnail, Button } from 'react-bootstrap';

var FoodResult = (props) => (
    <div className='food-result'>
        <Thumbnail src={props.foodType.value.image}>
            <h3>{props.result.restaurant}</h3>
            <div>{props.result.address}</div>
            <div>{props.result.hours}</div>
        </Thumbnail>
    </div>
);

export default FoodResult;
