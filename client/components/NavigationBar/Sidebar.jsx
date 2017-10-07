import React from 'react';
import { Link } from 'react-router';

export const Sidebar = () => {
  return (
    <div className="side-bar">
      <ul className="nav nav-pills nav-stacked">
        <li role="presentation" className="active">
          <Link to="/dashboard"><i className="glyphicon glyphicon-th" />
            <span className="nav-item">My Courses</span>
          </Link>
        </li>
        <li role="presentation">
          <a href="#"><i className="glyphicon glyphicon-bell not-active" />
            <span className="nav-item not-active">Notifications</span>
          </a>
        </li>
        <li role="presentation">
          <a href="#"><i className="glyphicon glyphicon-cog not-active" />
            <span className="nav-item not-active">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
