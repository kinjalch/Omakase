import React from 'react';
import LocationSearchBar from './LocationSearchBar';
import FoodSearchBar from './FoodSearchBar';
import FoodResult from './FoodResult';

class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'locationSearch',
            location: null,
            foodType: null,
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
        console.log(this.state.location, this.state.foodType)
        this.setState({page: 'foodResult'});
    }

    navigateToLocationSearch() {
        this.setState({page: 'locationSearch'});
    }

    render() {
        if (this.state.page === 'locationSearch') {
            return <LocationSearchBar
                        handleLocationChoice={this.handleLocationChoice}
                        handleLocationSearch={this.handleLocationSearch}
                    />;
        }
        if (this.state.page === 'foodSearch') {
            return <FoodSearchBar
                        handleFoodChoice={this.handleFoodChoice}
                        handleFoodSearch={this.handleFoodSearch}
                        navigateToLocationSearch={this.navigateToLocationSearch}
                    />;
        }
        if (this.state.page === 'foodResult') {
          return (
            <div>
             <FoodResult/>
            </div>
            );
        }
    }
};

export default SearchApp;
