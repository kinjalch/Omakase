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
            <Select
                placeholder={this.props.cityPlaceholder}
                clearable={false}
                value={this.state.cityChoice}
                options={this.state.cities}
                onChange={(choice) => {
                    this.setState({cityChoice: choice});
                    this.props.handleLocationChoice(choice);
                }}
            />
        );
    }
}

export default LocationSearchBar;
