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
            <div>
                <div>
                    <h1> What are you craving? </h1>
                    <Select
                        placeholder="I'm craving..."
                        clearable={false}
                        value={this.state.foodChoice}
                        options={this.state.foodTypes}
                        onChange={(choice) => {
                            this.setState({foodChoice: choice});
                            this.props.handleFoodChoice(choice)
                        }}
                    />
                    <button onClick={() => {this.props.handleFoodSearch()}}> Curate The Best </button>
                </div>
                <button onClick={() => {this.props.navigateToLocationSearch()}}> Back </button>
            </div>
        );
    }
}

export default FoodSearchBar;
