import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-4'>
            <h1>Real App Home Page</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <p>This is my first react project and it is awesome!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
