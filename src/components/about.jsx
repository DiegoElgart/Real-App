import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class About extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <PageHeader titleText='About Real App'></PageHeader>
        <div className='row'>
          <div className='col-12'>
            <p>
              I am a new full-stack developer. This site shows my abilities with
              react and NodeJs (MERN stack)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
