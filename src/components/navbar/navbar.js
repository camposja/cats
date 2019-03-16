import React, { Component } from 'react';
import octodexlogo from './OctodexLogo.png';
import './navbar.css';


class Navbar extends Component {
  render() {
    return (
        <div class="navbar">
            <div class="navbar-div">
                <img src={octodexlogo} Height= "25px" alt="Octocat"></img>
            </div>
            <div>
                <h3>RSS FAQ Back to GiftHub</h3>
            </div>
      </div>
    );
  }
}

export default Navbar;