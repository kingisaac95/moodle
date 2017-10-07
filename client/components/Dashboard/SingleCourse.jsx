import React from 'react';
import { CourseBanner } from './CourseBanner.jsx';
import { CourseDetails } from './CourseDetails.jsx';

export const SingleCourse = () => {
  return (
    <div className="dashboard-body">
      <CourseBanner />
      <CourseDetails />
    </div>
  );
};
