import React from 'react';

const FoodSearchBar = (props) => (
    <div>
        <div>
            <h1> What are you craving? </h1>
            <input placeholder="Enter a Food Item" onChange={(evt) => {props.handleFoodChange(evt)}}/>
            <button onClick={() => {props.handleFoodSearch()}}> Curate The Best </button>
        </div>
        <button onClick={() => {props.navigateToLocationSearch()}}> Back </button>
    </div>
);

export default FoodSearchBar;
