import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import "./homepage_style.css";
import "./auth/style.css";
import logo from "./logo.png";
import Container from "@mui/material/Container";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  render() {
    return (
      <div class="float-container">

  <div class="float-child"  style={{backgroundColor:'#cdae8d'}}>
     <form onSubmit={this.handleSubmit}>
        <h1 style={{color:'white'}}>Sign In</h1>

      
        <div class="input-field">
            <span class="input-item">
              <i class="fa-solid fa-user"></i>
            </span>
            <input class="form-input" id="txt-input" type="email" placeholder="Email" autocomplete="off" required 
              onChange={(e) => this.setState({ email: e.target.value })}/>
          </div>
          <div class="input-field">
            <span class="input-item">
              <i class="fa-solid fa-key"></i>
            </span>
            <input class="form-input" type="password" placeholder="Password" id="pwd" name="Password"
              autocomplete="off"  required
              onChange={(e) => this.setState({ password: e.target.value })}/>
          </div>
          <p style={{color:'gray'}}>
        <NavLink to="/forgot" style={{ color:"", float:'left'}}>
         Forgot Password?
          </NavLink>
        </p>
               <div className="mb-3">
          {/* <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div> */}
        </div>

        <div className="d-grid">
        <NavLink to="/homepage" style={{ color:"black" }}>
          <button class="login-button">LOG IN</button>
          </NavLink>

        </div>
        <p style={{color:'gray'}}>
        Don't have an account? <NavLink to="/sign-up" style={{ color:"black" }}>
         Sign Up
          </NavLink>
        </p>
      </form>
  </div>
  
  <div class="float-child ">
  <img  src={logo} style={{ width: "5cm", }} alt="logo" />
  </div>


     
      </div>
    );
  }
}
