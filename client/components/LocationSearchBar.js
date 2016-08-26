import React from 'react';
import cityNames from '../data/dummyCities';

class LocationSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: cityNames
        };
    }

    render() {
        return (
            <div>
                <h1> Where are you? </h1>
                <input placeholder="Enter your city, state" onChange={(evt) =>
                    {this.props.handleLocationChange(evt)}}/>
                <button onClick={() => {this.props.handleLocationSearch()}}> Find Food Near Me </button>
            </div>
        );
    }
}

export default LocationSearchBar;
