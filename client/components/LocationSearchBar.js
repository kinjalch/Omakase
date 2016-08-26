import React from 'react';
import cityNames from '../data/dummyCities';
import Select from 'react-select';

class LocationSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: cityNames,
            cityChoice: null
        };
    }

    render() {
        return (
            <div>
                <h1> Where are you? </h1>
                <Select
                    placeholder="Choose a city..."
                    value={this.state.cityChoice}
                    options={this.state.cities}
                    onChange={(choice) => {
                        console.log(choice.value)
                        this.setState({cityChoice: choice});
                        this.props.handleLocationChoice(choice.value)
                    }}
                />
                <button onClick={() => {this.props.handleLocationSearch()}}> Find Food Near Me </button>
            </div>
        );
    }
}

export default LocationSearchBar;
