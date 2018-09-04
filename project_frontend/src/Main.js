import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import NavBar from './Components/NavPage/NavBar';
import Footer from './Components/NavPage/Footer';

import About from './Components/NavPage/About';
import Home from './Components/NavPage/Home';
import SearchPage from './Components/SearchPage/SearchPage';
import IngreCheck from './Components/IngredientsCheck/IngredientsCheck';
import NotFound from './Components/NavPage/NotFound';

import './Main.css';

const Main = () =>
    <Router>
        <div className='container'> 
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/search/" component={SearchPage} />
                <Route path="/ingrecheck" component={IngreCheck} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </Router>;

export default Main
