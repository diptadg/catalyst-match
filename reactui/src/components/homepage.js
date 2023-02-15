import React from 'react';
import './homepage_style.css';
import Dashboard from "./dashboard";
import Button from "@mui/material/Button";
import {NavLink} from 'react-router-dom';
import Container from '@mui/material/Container';

export default function homepage() {
  return (
    <div>
      {Dashboard()}
        
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

         <NavLink to="/starting_page" style={{ textDecoration: "none" }}>
        <Button variant="outlined" style={{color: 'white',border:'black',backgroundColor:'#ac856e', fontSize:'1vw'}}  >
           Take personality test now
          </Button>
          </NavLink>
                    
      </div>
      <catalyst_profiling/>
      <catalyst_report/>
      <matching_page/>
      <starting_page/>
      </div>
  );
}