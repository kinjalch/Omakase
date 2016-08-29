import React from 'react';
import { Link } from 'react-router';
import VoteSurvey from './VoteSurvey';

class VoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'voteSurvey',
            foodType: null,
            location: null,
            hasLocationChoice: false,
            restaurant: null
        };

        this.handleFoodChoice = this.handleFoodChoice.bind(this);
        this.handleLocationChoice = this.handleLocationChoice.bind(this);
        this.handleRestaurantChoice = this.handleRestaurantChoice.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    handleFoodChoice(choice) {
        this.setState({foodType: choice});
    }

    handleLocationChoice(choice) {
        this.setState({location: choice});
        this.setState({hasLocationChoice: true});
    }

    handleRestaurantChoice(choice) {
        this.setState({restaurant: choice});
    }

    handleVote() {
        this.setState({page: 'userProfile'});
    }

    render() {
        if (this.state.page === 'voteSurvey') {
            return (
                <div>
                    <img src='./logo.jpg'/>
                    <Link to={'/'}>Search for Food</Link>
                    <VoteSurvey
                        handleFoodChoice={this.handleFoodChoice}
                        handleLocationChoice={this.handleLocationChoice}
                        hasLocationChoice={this.state.hasLocationChoice}
                        handleRestaurantChoice={this.handleRestaurantChoice}
                        handleVote={this.handleVote}
                    />
                </div>
            );
        }
        if (this.state.page === 'userProfile') {
            return (
                <div>
                    <img src='./logo.jpg'/>
                    <Link to={'/'}>Search for Food</Link>
                    <h1> You voted that {this.state.restaurant.label} has the best {this.state.foodType.label.toLowerCase()} in {this.state.location.label}! </h1>
                </div>
            );
        }
    }
}

export default VoteApp;
