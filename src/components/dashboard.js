import React from 'react';
import './homepage_style.css';
import logo from './logo.png';
import {NavLink} from 'react-router-dom';

export const dashboard = () => {
    return (
    <div class="menubar">
      <div class = "logo">
        <img src={logo} class="App-logo" alt="logo" />     
      </div>
  
      <div class="list">
        <ul>
            <li class="list-items"><NavLink to="/">HOME</NavLink ></li>
            <li class="list-items"><NavLink to="#">ABOUT</NavLink ></li>
            <li class="list-items"><NavLink to="#">CATALYST MATCH</NavLink >
              <div class="dropdown">
                <ul>
                  <li><NavLink to="/starting_page">Catalyst Profiling</NavLink ></li>
                  <li><NavLink to="/catalyst_report">Catalyst Report</NavLink ></li>
                </ul>
              </div>
            </li>
            <li class="list-items"><NavLink to="/matching_page">NETWORKING</NavLink ></li>
            <li class="list-items"><NavLink to="#">PROFILE</NavLink ></li>
          </ul>
      </div>  
      
    </div>
    );	
  }