import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Hobbies from './pages/Hobbies';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';




import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


const routing = (
    <Router>
        <Route path="/" component={App} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/resume" component={Resume} />
        <Route path="/aboutme" component={AboutMe} />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
