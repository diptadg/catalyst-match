import React from 'react';
import './homepage_style.css';
import logo from './logo.png';

export const dashboard = () => {
    return (
    <div class="menubar">
      <div class = "logo">
        <img src={logo} class="App-logo" alt="logo" />     
      </div>
  
      <div class="list">
        <ul>
            <li class="list-items"><a href="#">HOME</a></li>
            <li class="list-items"><a href="#">ABOUT</a></li>
            <li class="list-items"><a href="#">CATALYST MATCH</a>
              <div class="dropdown">
                <ul>
                  <li><a href="#">Catalyst Profiling</a></li>
                  <li><a href="#">Catalyst Report</a></li>
                </ul>
              </div>
            </li>
            <li class="list-items"><a href="#">NETWORKING</a></li>
            <li class="list-items"><a href="#">PROFILE</a></li>
          </ul>
      </div>  
    </div>
    );	
  }