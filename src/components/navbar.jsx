import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
        <a className='navbar-brand' href='#'>
          Real App
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                My Cards
              </a>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Sgin In
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
