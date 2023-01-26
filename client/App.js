import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import {starting_page} from './components/starting_page.js';
import {homepage} from './components/homepage.js';
import {matching_page} from './components/matching_page.js';
import {catalyst_report} from './components/catalyst_report.js';
import {catalyst_profiling} from './components/catalyst_profiling.js';

const App = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/userDetails" component={UserDetails} />
          <Route exact path="/homepage" component={homepage} />
          <Route exact path="/catalyst_profiling" component={catalyst_profiling} />
          <Route exact path="/catalyst_report" component={catalyst_report} />
          <Route exact path="/matching_page" component={matching_page} />
          <Route exact path="/starting_page" component={starting_page} />
    </Switch>
        </div>
    );
}

export default App;