import React from 'react';
import { Switch, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default

import Home from './Pages/Home';
import Show from './Pages/Show';
import Starred from './Pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id">
      <Show />
      </Route>

      <Route>
        <div>Not found</div>
      </Route>
    </Switch>
  );
};

export default App;
