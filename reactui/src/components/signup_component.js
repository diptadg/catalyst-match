import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import "./homepage_style.css";
import "./auth/style.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      CPassword:"",
      EducationalBackground:""


    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password, CPassword, EducationalBackground } = this.state;
    console.log(fname, lname, email, password, CPassword, EducationalBackground);
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
        EducationalBackground
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  render() {
    return (
      <div class="float-container" style={{ paddingTop: "30px"}}>
        <h2 >
          Registration Form 
        </h2>
     <form onSubmit={this.handleSubmit}>
      <div class="float-child" style={{  padding: "100px 160px 160px 0px"}} >
         <form onSubmit={this.handleSubmit}>
        
            <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-key"></i>
                </span>
                <input class="form-input" type="password" placeholder="Password" id="pwd" name="Password"
                  autocomplete="off"  required
                  onChange={(e) => this.setState({ password: e.target.value })}/>
              </div>
              <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-key"></i>
                </span>
                <input class="form-input" type="password" placeholder="Confirm Password" id="pwd" name="Password"
                  autocomplete="off"  required
                  onChange={(e) => this.setState({ CPassword: e.target.value })}/>
              </div>
          
            <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input class="form-input" id="txt-input" type="text" placeholder="Education" autocomplete="off" required 
                    onChange={(e) => this.setState({ EducationalBackground: e.target.value })}/>
              </div>
              
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
    
          
          </form>
      </div>
      
      <div class="float-child "  style={{  padding: "100px 0px 160px 160px"}} >
    
    

      <form onSubmit={this.handleSubmit}>
   

        <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input class="form-input" id="txt-input" type="text" placeholder="First name" autocomplete="off" required 
                onChange={(e) => this.setState({ fname: e.target.value })}/>
              </div>
     
              <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input class="form-input" id="txt-input" type="text" placeholder="Last name" autocomplete="off" required 
             onChange={(e) => this.setState({ lname: e.target.value })}/>
              </div>
     

              <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input class="form-input" id="txt-input" type="email" placeholder="Email" autocomplete="off" required 
                  onChange={(e) => this.setState({ email: e.target.value })}/>
              </div>

              <p style={{color:'gray'}}>
              Already registered ? <NavLink to="/sign-in" style={{ color:"black" }}>
              Sign In
             </NavLink>
           </p>
              <div className="d-grid">
             <br></br>
             <button type="submit" style={{backgroundColor:'rgb(205, 174, 141)',width:"160px",float:"left"}} class="login-button"> Sign Up</button>
   
           </div>
         


        
      </form>


      </div>
    
      </form>
         
          </div>
      
    );
  }
}
