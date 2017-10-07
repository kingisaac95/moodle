import React from 'react';
import { Link } from 'react-router';
import { CourseCard } from './CourseCard.jsx';
import { Courses } from '../../assets/data/Courses';

export const AllCourses = () => {
  return (
    <div className="dashboard-body">
      <div className="row">
        <Link to="/course">
          <CourseCard courses={Courses} />
        </Link>
      </div>
    </div>
  );
};
