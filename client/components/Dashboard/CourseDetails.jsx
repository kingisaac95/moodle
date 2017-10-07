import React from 'react';
import { LecturersDetails } from './LecturersDetails.jsx';
import { LectureDetails } from './LectureDetails.jsx';
import { Lecturers } from '../../assets/data/Lecturers';
import { Lectures } from '../../assets/data/Lectures';

export const CourseDetails = () => {
  return (
    <div className="course-details center-text">
      <ul className="nav nav-tabs">
        <li className="active"><a className="tab-item" data-toggle="tab" href="#overview">Course Overview</a></li>
        <li><a className="tab-item" data-toggle="tab" href="#notes">Lecture Notes</a></li>
        <li><a className="tab-item" data-toggle="tab" href="#tests">Pending Tests (0)</a></li>
      </ul>

      <div className="tab-content">
        <div id="overview" className="tab-pane fade in active">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h4 className="text-center overview-title">Course Lecturers</h4>
          <div className="row">
            <LecturersDetails lecturers={Lecturers} />
          </div>
        </div>
        <div id="notes" className="tab-pane fade">
          <LectureDetails lectures={Lectures} />
        </div>
        <div id="tests" className="tab-pane fade">
          <h4>No pending tests</h4>
          <p>Pending tests will show up here</p>
        </div>
      </div>
    </div>
  );
};
