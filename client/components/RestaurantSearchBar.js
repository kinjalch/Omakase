import React from 'react';

const RestaurantSearchBar = (props) => {
        return (
            <input className="input-bar"
                onChange={(evt) => {
                    props.handleRestaurantChoice(evt.target.value);
                }}
            />
        );
}

export default RestaurantSearchBar;
