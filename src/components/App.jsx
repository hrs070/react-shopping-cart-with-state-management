import React from 'react';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/cart' component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}