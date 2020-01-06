import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

import GlobalStyle from './styles/global';

export default function Routes() {
  return (
    <Switch>
      <GlobalStyle />
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
