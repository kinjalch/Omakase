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
    }

    handleLocationChange(evt) {
        this.setState({location: evt.target.value});
    }

    handleLocationSearch() {
        this.setState({page: 'foodSearch'});
    }

    render() {
        if (this.state.page === 'locationSearch') {
            return <LocationSearchBar
                        handleLocationChange={this.handleLocationChange}
                        handleLocationSearch={this.handleLocationSearch}
                    />;
        }
        if (this.state.page === 'foodSearch') {
            return <FoodSearchBar />;
        }
        if (this.state.page === 'foodResult') {
            return <FoodResult />;
        }

    }
};

export default SearchApp;
