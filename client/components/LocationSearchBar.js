import React from 'react';

const LocationSearchBar = (props) => (
    <div>
        <h1> Where are you? </h1>
        <input placeholder="Enter your city, state" onChange={(evt) => {props.handleLocationChange(evt)}}/>
        <button onClick={() => {props.handleLocationSearch()}}> Find Food Near Me </button>
    </div>
);

export default LocationSearchBar;
