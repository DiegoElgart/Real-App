import React from "react";
import Joi from "joi-browser";

import PageHeader from "./common/pageHeader";
import Form from "./common/form";

import http from "../services/httpService";
import { apiUrl } from "../config.json";

import userService from "../services/userService";
import { Redirect } from "react-router-dom";

class BizSignUp extends Form {
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
    // const { history } = this.props;

    const data = { ...this.state.data, biz: true };

    try {
      await http.post(`${apiUrl}/users`, data);
      await userService.login(data.email, data.password);

      window.location = "/create-card";
    } catch (error) {
      if (error.response && error.response.status === 400) {
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
        <PageHeader titleText='Business registration form'></PageHeader>
        <div className='row'>
          <div className='col-12'>
            <p>Open a business account! It is free for now... </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Next")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BizSignUp;
