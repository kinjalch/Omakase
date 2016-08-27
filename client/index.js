import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import SearchApp from './components/SearchApp.js';
import VoteApp from './components/VoteApp.js';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={SearchApp} />
        <Route path="/vote" component={VoteApp} />
    </Router>
), document.getElementById("app"));
