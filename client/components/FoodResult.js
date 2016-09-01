import React from 'react';
import { Image, Thumbnail, Button } from 'react-bootstrap';

var FoodResult = (props) => (
    <div className='food-result'>
        <Thumbnail src={props.foodType.value.image}>
            <h3>{props.result}</h3>
        </Thumbnail>
    </div>
);

export default FoodResult;
