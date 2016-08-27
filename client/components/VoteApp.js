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
            restaurant: null,
            hasLocationChoice: false
        };

        this.handleFoodChoice = this.handleFoodChoice.bind(this);
        this.handleLocationChoice = this.handleLocationChoice.bind(this);
        this.handleRestaurantChoice = this.handleRestaurantChoice.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    handleFoodChoice(choice) {
        console.log(choice);
    }

    handleLocationChoice(choice) {
        console.log(choice);
        this.setState({hasLocationChoice: true});
    }

    handleRestaurantChoice(choice) {
        console.log(choice);
    }

    handleVote() {
        this.setState({page: 'userProfile'});
    }

    render() {
        if (this.state.page === 'voteSurvey') {
            return (
                <div>
                    <Link to={'/'}> Search for Food </Link>
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
                    <Link to={'/'}> Search for Food </Link>
                    <h1> You voted! </h1>
                </div>
            );
        }
    }
}

export default VoteApp;
