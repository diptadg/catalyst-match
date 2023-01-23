import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import {starting_page} from './components/starting_page.js';
import {homepage} from './components/homepage.js';
import {matching_page} from './components/matching_page.js';
import {catalyst_report} from './components/catalyst_report.js';
import {catalyst_profiling} from './components/catalyst_profiling.js';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route exact path="/" component={homepage} />
              <Route exact path="/catalyst_profiling" component={catalyst_profiling} />
              <Route exact path="/catalyst_report" component={catalyst_report} />
              <Route exact path="/matching_page" component={matching_page} />
              <Route exact path="/starting_page" component={starting_page} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
