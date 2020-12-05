import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Header from './components/Header';



const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/product/:id" component={Product}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
