import React from 'react';
import { Link } from 'react-router';

export const SigninForm = () => {
  return (
    <div className="login">
      <h3>Login to Continue</h3>
      <form>
        <div className="form-group">
          <input type="email" className="form-control login" id="email" placeholder="Username"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control login" id="pwd" placeholder="Password" />
        </div>
        <Link to="/dashboard">
          <button type="submit" className="btn btn-default login">Login</button>
        </Link>
      </form>
    </div>
  );
};
