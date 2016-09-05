import React from 'react';

const RestaurantResult = (props) => {
    return (
        <div onClick={() => {props.handleRestaurantChoice(props.result)}} className="restaurant-result">
            <div> {props.result.name} </div>
            <div> {props.result.formatted_address} </div>
        </div>
    );
}

export default RestaurantResult;
