import React from 'react';
import './style.css';
import logo from './logo.png';

const homepage = () => {
  return (
    <div class  = "dashboard">
      <div class = "title">
        <div class = "logo">
          <img src={logo} class="App-logo" alt="logo" />     
        </div>
  
        <div class="menubar">
          <div class="list">
            <u1 class="horizontal-list">
                <li class="list-items"><a href="#">HOME</a></li>
                <li class="list-items"><a href="#">ABOUT</a></li>
                <li class="list-items"><a href="#">CATALYST MATCH</a></li>
                <li class="list-items"><a href="#">NETWORKING</a></li>
                <li class="list-items"><a href="#">PROFILE</a></li>
              </u1>
          </div>  
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
