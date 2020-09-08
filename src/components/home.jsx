import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <PageHeader titleText=' Real App Home Page'></PageHeader>
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
