import React, { Component, PropTypes } from "react";
import { NavigationBar } from "./NavigationBar/NavigationBar.jsx";
import { Home } from "../components/Main/Home.jsx";
import Footer from "./Footer/Footer.jsx";

export default class App extends Component {
    render() {
      return(
        <div>
          { this.props.children }
        </div>
      );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};
