import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "./dashboard";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Avatar from "@mui/material/Avatar";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./homepage_style.css";
import "./auth/style.css";
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      CPassword: "",
      EducationalBackground: "",
      btn:true,
    
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onclickbtn = this.onclickbtn.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password, CPassword, EducationalBackground } =
      this.state;
    console.log(
      fname,
      lname,
      email,
      password,
      CPassword,
      EducationalBackground
    );
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
        CPassword,
        EducationalBackground,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  onclickbtn(e)
  {
    this.setState({ btn: !this.state.btn })
    

  }
  render() {
    return (
      <div>
         {Dashboard()}
    
      <div class="float-container" style={{ paddingTop: "30px" }}>
      <h2 >
          Profile Details 
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div
            class="float-child"
            style={{ padding: "100px 160px 160px 0px" }}>

<Card sx={{ minWidth: 275 }}>

<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          My badges
        </Typography>
<div style={{display:'inline',float:'left', margin:'30px'}}>
<Avatar style={{width:"70px",height:"70px"}} alt="Iemy Sharp" src="/static/images/avatar/2.jpg" />
<br></br>     
<Avatar style={{width:"70px",height:"70px"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
<br></br>     
<Avatar style={{width:"70px",height:"70px"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          
</div>


<div style={{display:'inline',float:'left', margin:'30px'}}>
<Avatar style={{width:"70px",height:"70px"}} alt="Pemy Sharp" src="/static/images/avatar/2.jpg" />
       <br></br>     
<Avatar style={{width:"70px",height:"70px"}} alt="Wemy Sharp" src="/static/images/avatar/2.jpg" />
<br></br>     
<Avatar style={{width:"70px",height:"70px"}} alt="Wemy Sharp" src="/static/images/avatar/2.jpg" />
    
</div>


             
           
              
    </Card>
          </div>


          <div
            class="float-child "
            style={{ padding: "50px 0px 160px 160px" }}
          >
            <div > 
<div >
              <div>
              <Avatar style={{display:"flex",width:"100px",height:"100px"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            
              </div>
              <br/>
              
            <FormControl disabled={this.state.btn} variant="standard" style={{float:'left'}}>
        <InputLabel htmlFor="component-disabled">First Name</InputLabel>
        <Input id="component-disabled" defaultValue="Sami" 
         onChange={(e) => this.setState({ fname: e.target.value })}/>
       
      </FormControl>
      &emsp;
      <FormControl disabled={this.state.btn} variant="standard">
        <InputLabel htmlFor="component-disabled">Last Name</InputLabel>
        <Input id="component-disabled" defaultValue="khan" 
         onChange={(e) => this.setState({ lname: e.target.value })}/>
        
      </FormControl>
      
<div style={{float:'left'}}>
      <br/>
      <br/> 
      <FormControl disabled={this.state.btn} variant="standard">
        <InputLabel htmlFor="component-disabled">Email</InputLabel>
        <Input id="component-disabled" defaultValue="mail.gmail.com" 
         onChange={(e) => this.setState({ email: e.target.value })}/>
       
      </FormControl>
      <br/>
      <br/> 
      <FormControl disabled={this.state.btn} variant="standard">
        <InputLabel htmlFor="component-disabled">Password</InputLabel>
        <Input id="component-disabled" defaultValue="********" 
        //  onChange={(e) => this.setState({ lname: e.target.value })}
        />
       
      </FormControl>
      <br/>
      <br/> 
      <FormControl disabled={this.state.btn} variant="standard">
        <InputLabel htmlFor="component-disabled">Education</InputLabel>
        <Input id="component-disabled" defaultValue="Software Eng" 
        //  onChange={(e) => this.setState({ lname: e.target.value })}
        />
       
      </FormControl>
      <br/>
      <br/> 
      <FormControl disabled={this.state.btn} variant="standard">
        <InputLabel htmlFor="component-disabled">Intrest</InputLabel>
        <Input id="component-disabled" defaultValue="web" 
        //  onChange={(e) => this.setState({ lname: e.target.value })}
        />
       
      </FormControl>
    </div>
            </div>
            
    <div className="d-grid" style={{width:'200px'}}>    
                <button
                  type="submit"
                  style={{
                    backgroundColor: "rgb(205, 174, 141)",
                    width: "160px",
                    float: "left",
                  }}
                  class="login-button"
                  onClick={this.onclickbtn}>
                {this.state.btn?"Edit Profile":"Save Profile"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
