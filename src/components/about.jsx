import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-4'>
            <h1>About Real App</h1>
          </div>
        </div>
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
