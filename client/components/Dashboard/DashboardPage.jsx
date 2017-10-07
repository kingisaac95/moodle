import React, { Component } from 'react';
import { Route } from 'react-router';
import { NavigationBar } from '../NavigationBar/NavigationBar.jsx';
import { Sidebar } from '../NavigationBar/Sidebar.jsx';
import { AllCourses } from './AllCourses.jsx';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <AllCourses />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
