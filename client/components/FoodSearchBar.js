import React from 'react';
import foodTypes from '../data/dummyFoods';
import Select from 'react-select';

class FoodSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodTypes: foodTypes,
            foodChoice: null
        };
    }

    render() {
        return (
            <Select
                placeholder={this.props.foodPlaceholder}
                clearable={false}
                backspaceRemoves={false}
                value={this.state.foodChoice}
                options={this.state.foodTypes}
                onChange={(choice) => {
                    this.setState({foodChoice: choice});
                    this.props.handleFoodChoice(choice);
                }}
            />
        );
    }
}

export default FoodSearchBar;
