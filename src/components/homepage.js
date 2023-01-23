import React from 'react';
import './homepage_style.css';
import {dashboard} from './dashboard.js';
import {NavLink} from 'react-router-dom';


export const homepage = () => {
  return (
    <div class  = "homepage">
      {dashboard()}
        
      <div class = "homepage-content">
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
            <NavLink to="/starting_page" class="button1">Take personality test now</NavLink>
          </div>
        </section>
                    
      </div>
      <catalyst_profiling/>
      <catalyst_report/>
      <matching_page/>
      <starting_page/>
      </div>
       
  );
}