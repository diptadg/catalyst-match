import React from 'react';

import {Routes, Route} from 'react-router-dom';
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import Forgot from "./components/forgot_component";
import Profile from "./components/profile";
import NewPassword from "./components/new_password_component";
import UserDetails from "./components/userDetails";
import Homepage from "./components/homepage";
import Starting_page from "./components/starting_page";

import Matching_page from "./components/matching_page";
import Catalyst_report from "./components/catalyst_report";
import Catalyst_profiling from "./components/catalyst_profiling";

const App = () => {
    return (
      
      <div>
        
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/sign-in" element={<Login/>} />
          <Route exact path="/sign-up" element={<SignUp/>} />
          <Route exact path="/forgot" element={<Forgot/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/new_pass" element={<NewPassword/>} />
          <Route exact path="/userDetails" element={<UserDetails/>} />
          <Route exact path="/homepage" element={<Homepage/>} />
          <Route exact path="/catalyst_profiling" element={<Catalyst_profiling/>} />
          <Route exact path="/catalyst_report" element={<Catalyst_report/>} />
          <Route exact path="/matching_page" element={<Matching_page/>} />
          <Route exact path="/starting_page" element={<Starting_page/>} />
          <Route path="/*" element={<div><h1 style={{margin:"20%", paddingLeft:"20%" }}>Page Not Found ! </h1></div>} />
          </Routes>
          
        </div>
    );
}

export default App;



