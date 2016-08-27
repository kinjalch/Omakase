import React from 'react';
import { Link } from 'react-router';
import LocationSearchBar from './LocationSearchBar';
import FoodSearchBar from './FoodSearchBar';
import FoodResult from './FoodResult';
import results from '../data/dummyResults';

class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'locationSearch',
            location: null,
            foodType: null,
            result: null
        };

        this.handleLocationChoice = this.handleLocationChoice.bind(this);
        this.handleLocationSearch = this.handleLocationSearch.bind(this);
        this.handleFoodChoice = this.handleFoodChoice.bind(this);
        this.handleFoodSearch = this.handleFoodSearch.bind(this);
        this.navigateToLocationSearch = this.navigateToLocationSearch.bind(this);
    }

    handleLocationChoice(choice) {
        this.setState({location: choice});
    }

    handleLocationSearch() {
        this.setState({page: 'foodSearch'});
    }

    handleFoodChoice(choice) {
        this.setState({foodType: choice});
    }

    handleFoodSearch() {
        this.setState({page: 'foodResult'});
    }

    navigateToLocationSearch() {
        this.setState({page: 'locationSearch'});
    }

    render() {
        if (this.state.page === 'locationSearch') {
            return (
                <div>
                    <Link to={'/vote'}> Go Vote </Link>
                    <div>
                        <h1> Where are you? </h1>
                        <LocationSearchBar
                            cityPlaceholder="Choose a city..."
                            handleLocationChoice={this.handleLocationChoice}
                        />
                        <button onClick={() => {this.handleLocationSearch()}}> Find Food Near Me </button>
                    </div>
                </div>
            );
        }
        if (this.state.page === 'foodSearch') {
            return (
                <div>
                    <Link to={'/vote'}> Go Vote </Link>
                    <div>
                        <h1> What are you craving? </h1>
                        <FoodSearchBar
                            foodPlaceholder="I'm craving..."
                            handleFoodChoice={this.handleFoodChoice}
                        />
                        <button onClick={() => {this.handleFoodSearch()}}> Curate The Best </button>
                    </div>
                    <button onClick={() => {this.navigateToLocationSearch()}}> Back </button>
                </div>
            );
        }
        if (this.state.page === 'foodResult') {
            return (
                <div>
                    <Link to={'/vote'}> Go Vote </Link>
                    <FoodResult
                                location={this.state.location}
                                foodType={this.state.foodType}
                                result={results[this.state.foodType.label]}
                    />
                </div>
            );
        }
    }
};

export default SearchApp;
