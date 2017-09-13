import React from 'react';

export class NavigationBar extends React.Component {
  render() {
    return(
      <nav className="nav cyan darken-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" id="navbar-title">React Starter Kit</a>
        </div>
      </nav>
    );
  }
}
