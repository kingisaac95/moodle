import React from 'react';

export class NavigationBar extends React.Component {
  render() {
    return(
      <nav className="cyan darken-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" id="navbar-title">React Starter Kit</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Donate</a></li>
            <li><a id="contact-us" href="#">Contact us</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
