import React from 'react';
import './catalyst_report.css';
import logo from './logo.png';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import {NavLink} from 'react-router-dom';


export default function catalyst_report(){
    return(
        <div class="catalyst_report">
         {/* <div class="exit">
                
            
                     <a href="#"><span class="material-symbols-outlined exitButton">Close</span></a>
      
                
            </div> */}
  
  <NavLink to="/homepage" style={{backgroundColor:'black' ,width:'100px',height:'100px' } }>
          
<div style={{display:"flex",float:"right"}}>
<Avatar style={{display:"flex" ,backgroundColor:"white",color:'black',margin:'20px'}} alt="X" src="/static/images/avatar/2.jpg" />

</div>
</NavLink>    
            <div class = "catalyst_report-logo">
                <img src={logo} class="" style={{ width: "1.5cm" }} alt="logo" />     
            </div>
            
            <div class="intro">Your career recommendation is</div>

            <div class="career_recommendation">
                <div class="poly_box">
                    <div class="poly">
                        <div class="field">Internet Technology</div>
                        <div class="field_description">“The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.”
-- Bill Gates, Co-founder of Microsoft.</div>
                    </div>
                </div>
                
                {/* <div class="careers">
                    <ul>
                        <li>{careers("Web")}</li>
                        <li>{careers("programmer")}</li>
                        <li>{careers("ai developer")}</li>
                    </ul>
                </div> */}
            </div>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

        </div>
        
    );
}

// const career_description = () => {
//     return(
//         if field="Internet Technology" {
//             <div class="career_description">“The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.”<br />-- Bill Gates, Co-founder of Microsoft.</div>
//         }
//     );
// }

const careers = (careers) => { 
    return(
        <div class="career_box">{careers}</div>
    );
}