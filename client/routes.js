import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../client/components/App.jsx';
import Home from '../client/components/Main/Home.jsx';
import DashboardPage from '../client/components/Dashboard/DashboardPage.jsx';
import SingleCoursePage from '../client/components/Dashboard/SingleCoursePage.jsx';
import { AllCourses } from '../client/components/Dashboard/AllCourses.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="dashboard" component={DashboardPage} />
    <Route path="course" component={SingleCoursePage} />
    <Route path="my-courses" component={AllCourses} />
  </Route>
);
