import React, { Component } from 'react';
import { SigninForm } from './SigninForm.jsx';

export default class Home extends Component {
  render() {
    return (
      <div className="row center-block" id="home">
        <div className="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
          <div className="sign-in-wrapper text-center">
            <img src={require(`../../assets/img/logo.png`)} alt="moodle logo" height="80"/>
            <h4>Learning Resource for Students</h4>
            <SigninForm />
          </div>
        </div>
      </div>
    );
  }
}
