import React from 'react';

var FoodResult = (props) => (
    <div id='food-result'>
        <h1>Best {props.foodType.value.foodName.toLowerCase()} in {props.location.label}:</h1>
        <img src={props.foodType.value.image}/>
        <div>{props.result.restaurant}</div>
        <div>{props.result.address}</div>
        <div>{props.result.hours}</div>
    </div>
);

export default FoodResult;
