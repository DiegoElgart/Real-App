import React from "react";
import Joi from "joi-browser";
import userService from "../services/userService";

import PageHeader from "./common/pageHeader";
import Form from "./common/form";
import { Redirect } from "react-router-dom";

class SignIn extends Form {
  state = {
    data: {
      password: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };
  async doSubmit() {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        this.setState({ errors: error.response.data });
      }
    }
  }

  render() {
    if (userService.getCurrentUser()) {
      return <Redirect to='/' />;
    }
    return (
      <div className='container'>
        <PageHeader titleText='Sign In'></PageHeader>
        <div className='row'>
          <div className='col-12'>
            <p>Welcom back!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}

              {this.renderButton("Sign In")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
