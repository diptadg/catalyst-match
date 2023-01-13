import React from 'react';
import './style.css';
import logo from './logo.png';

const homepage = () => {
  return (
    <div class  = "dashboard">

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
        
      <div class = "dashboard-content">
         <h1 class = "content-text">
           <span class = "ct1">
             Understand yourself better with Catalyst Match
           </span>
           <br />
           <span class = "ct2">
             Take our personality test now to find out your personality type and what career paths are suitable for you!
           </span>
           <br /><br />
         </h1>

        <section class="button">
          <div class="button">
            <button class="button1">Take personality test now</button>
          </div>
        </section>
                    
      </div>
    </div>

        
  );
}

export default homepage;
