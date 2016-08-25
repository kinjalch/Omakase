import React from 'react';
import LocationSearchBar from './LocationSearchBar';
import FoodSearchBar from './FoodSearchBar';

class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'locationSearch',
            location: null,
            foodType: null
        };

        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleLocationSearch = this.handleLocationSearch.bind(this);
        this.handleFoodChange = this.handleFoodChange.bind(this);
        this.handleFoodSearch = this.handleFoodSearch.bind(this);
        this.navigateToLocationSearch = this.navigateToLocationSearch.bind(this);
    }

    handleLocationChange(evt) {
        this.setState({location: evt.target.value});
    }

    handleLocationSearch() {
        this.setState({page: 'foodSearch'});
    }

    handleFoodChange(evt) {
        this.setState({foodType: evt.target.value});
    }

    handleFoodSearch() {
        this.setState({page: 'foodResult'});
    }

    navigateToLocationSearch() {
        this.setState({page: 'locationSearch'});
    }

    render() {
        if (this.state.page === 'locationSearch') {
            return <LocationSearchBar
                        handleLocationChange={this.handleLocationChange}
                        handleLocationSearch={this.handleLocationSearch}
                    />;
        }
        if (this.state.page === 'foodSearch') {
            return <FoodSearchBar
                        handleFoodChange={this.handleFoodChange}
                        handleFoodSearch={this.handleFoodSearch}
                        navigateToLocationSearch={this.navigateToLocationSearch}
                    />;
        }
        if (this.state.page === 'foodResult') {
            return <h1> Here is where you will get a result </h1>;
        }
    }
};

export default SearchApp;
