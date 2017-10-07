import React, { PropTypes } from 'react';

export const CourseCard = ({courses}) => {
  return (
    <div>
      {
        courses.map((course, index) =>
          <div key={index} className="col-md-4 single-course">
            <div className="thumb-header">
              <img src={course.courseImage} alt="image" height="100"/>
              <div className="overlay" />
            </div>
            <div className="thumb-body">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <hr/>
              <p className="lead taught-by">Taught by</p>
              <div>
                <img src={course.lecturer1} className="img-circle" alt="image" height="40"/>
                <img src={course.lecturer2} className="img-circle" alt="image" height="40"/>
                <img src={course.lecturer3} className="img-circle" alt="image" height="40"/>
                <span className="plus">+ 1 more</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

CourseCard.propTypes = {
  courses: PropTypes.array.isRequired
};
