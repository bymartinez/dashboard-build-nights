import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
//Pages
import Home from './Home';
import Product from './Product';
import Invoice from './Invoice';

const Routes = () => {
  return (
    <BrowserRouter>
      <span>
        <Route
          path='/'
          exact
          component={Home} />

        <Route
          path='/products'
          exact
          component={Product} />

        <Route
          path='/invoice'
          exact
          component={Invoice} />
      </span>
    </BrowserRouter>
  );
}

export default Routes;