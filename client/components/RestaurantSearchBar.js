import React from 'react';
import restaurants from '../data/dummyRestaurants';
import Select from 'react-select';

class RestaurantSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: restaurants,
            restaurantChoice: null
        };
    }

    render() {
        return (
            <Select
                disabled={!this.props.hasLocationChoice}
                placeholder={null}
                clearable={false}
                value={this.state.restaurantChoice}
                options={this.state.restaurants}
                onChange={(choice) => {
                    this.setState({restaurantChoice: choice});
                    this.props.handleRestaurantChoice(choice);
                }}
            />
        );
    }
}

export default RestaurantSearchBar;
