 import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../TECH.png'
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <NavLink to={'/user'}><button className="formFieldButton">Sign In</button></NavLink>
            {/* <Link to="/" className="formFieldLink">
              Create an account
            </Link> */}
          </div>
          <div style={{
            display: "flex",
            marginTop: "200px"
          }}>
            <div style={{
              flexGrow: "1"
            }}></div>
            <img src={logo} width="210px" height="80px"/>
          </div>

          {/* <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </div> */}
        </form>
      </div>
    );
  }
}

export default SignInForm;
