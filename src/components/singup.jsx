import React from 'react'
import PageHeader from "./common/pageHeader";
import Form from "./common/form";
import Joi from "joi-browser";

class SignUp extends Form {
  state = {
    data: {
      name: "",
      password: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };
  doSubmit() {
    console.log("submited", this.state)
  }
  render() {
    return (
      <div className='container'>
        <PageHeader titleText='Sign Up for Real App'></PageHeader>
        <div className='row'>
          <div className='col-12'>
            <p>You can open a new account for free</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
