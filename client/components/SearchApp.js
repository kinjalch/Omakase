import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import LocationSearchBar from './LocationSearchBar';
import FoodSearchBar from './FoodSearchBar';
import FoodResult from './FoodResult';
import results from '../data/dummyResults';
import { Button, Glyphicon } from 'react-bootstrap';

class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'locationSearch',
            navMessage: 'Go Vote!',
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
        this.setState({locationError: false});
    }

    handleLocationSearch() {
        if (this.state.location) {
            this.setState({page: 'foodSearch'});
        } else {
            this.setState({locationError: true});
        }
    }

    handleFoodChoice(choice) {
        this.setState({foodType: choice});
        this.setState({foodError: false});
    }

    handleFoodSearch() {
        if (this.state.foodType) {
            this.setState({page: 'foodResult'});
        } else {
            this.setState({foodError: true});
        }
    }

    navigateToLocationSearch() {
        this.setState({location: null});
        this.setState({foodType: null});
        this.setState({page: 'locationSearch'});
    }

    render() {
        if (this.state.page === 'locationSearch') {
            return (
                <div className="container-fluid">
                    <NavBar navMessage={this.state.navMessage}/>
                    <div className="main-container">
                        <div className="main-content">
                            <p> Where are you? </p>
                            {this.state.locationError && <div className="error-message"> Please choose a city! </div>}
                            <LocationSearchBar
                                cityPlaceholder="Choose a city..."
                                handleLocationChoice={this.handleLocationChoice}
                            />
                            <Button className="main-button" onClick={() => {this.handleLocationSearch()}}> Find Food Near Me </Button>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.page === 'foodSearch') {
            return (
                <div className="container-fluid food-search">
                    <NavBar navMessage={this.state.navMessage}/>
                    <div className="main-container">
                        <a className="arrow" onClick={() => {this.navigateToLocationSearch()}}><Glyphicon glyph="chevron-left"/></a>
                        <div className="main-content">
                            <p> What are you craving? </p>
                            {this.state.foodError && <div className="error-message"> Please choose a food! </div>}
                            <FoodSearchBar
                                foodPlaceholder="I'm craving..."
                                handleFoodChoice={this.handleFoodChoice}
                            />
                            <Button className="main-button" onClick={() => {this.handleFoodSearch()}}> Curate The Best </Button>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.page === 'foodResult') {
            return (
                <div>
                    <img src='./logo.jpg'/>
                    <Link to={'/vote'}>Go Vote</Link>
                    <FoodResult
                                location={this.state.location}
                                foodType={this.state.foodType}
                                result={results[this.state.foodType.label]}
                    />
                    <button onClick={() => {this.navigateToLocationSearch()}}> Search for more! </button>
                </div>
            );
        }
    }
};

export default SearchApp;
