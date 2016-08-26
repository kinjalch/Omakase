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
                    clearable={false}
                    value={this.state.cityChoice}
                    options={this.state.cities}
                    onChange={(choice) => {
                        this.setState({cityChoice: choice});
                        this.props.handleLocationChoice(choice)
                    }}
                />
                <button onClick={() => {this.props.handleLocationSearch()}}> Find Food Near Me </button>
            </div>
        );
    }
}

export default LocationSearchBar;
