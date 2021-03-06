import React from "react";
import Joi from "joi-browser";

import PageHeader from "./common/pageHeader";
import Form from "./common/form";

import http from "../services/httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";

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
  async doSubmit() {
    const { history } = this.props;

    const data = { ...this.state.data };
    data.biz = false;

    try {
      await http.post(`${apiUrl}/users`, data);
      toast("You are now a real-app user! You rock!", {
        position: "top-center",
        type: "success",
      });

      history.replace("/signin");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response);
        this.setState({
          errors: {
            ...this.state.errors,
            email: "Email is already registered",
          },
        });
      }
    }
  }
  render() {
    if (userService.getCurrentUser()) {
      return <Redirect to='/' />;
    }

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
