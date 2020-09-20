import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Poke from './pages/Poke';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:pokemon" component={Poke} />
      </Switch>
    </BrowserRouter>
  );
}
