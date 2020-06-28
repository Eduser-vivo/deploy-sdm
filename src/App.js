import React from 'react';
import SignIn from './components/Authentication/SignIn';
import Home from './components/Home/Home';
import {MenuAppBar} from './components/topbar/MenuAppBar';
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
        <MenuAppBar />
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/login">
            <SignIn />
        </Route>
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}