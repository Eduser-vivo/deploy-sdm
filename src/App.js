import React from 'react';
import SignIn from './components/Authentication/SignIn';
import Home from './components/Home/Home';
import { Switch, Route, useLocation } from 'react-router-dom';
import Dashbord from './components/Dashbord/Dashbord';

function App() {
  return (
    <div>
     
        <Switch>

          <Route exact path="/">
              <Home />
              {/* <Caisse /> */}
          </Route>

          <Route path="/login">
              <SignIn />
          </Route>

          <Route path="/dashbord">
            <Dashbord/>
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