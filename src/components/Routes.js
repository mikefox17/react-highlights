import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/features'>
                    <Features />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;
