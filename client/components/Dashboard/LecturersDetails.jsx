import React, { PropTypes } from 'react';

export const LecturersDetails = ({lecturers}) => {
  return (
    <div>
      {
        lecturers.map((lecturer, index) =>
          <div key={index} className="col-sm-6 col-md-3 text-center">
            <img
              src={lecturer.profileImage}
              className="img-circle"
              alt="user icon"
              height="100"
            />
            <h5>{lecturer.name}</h5>
            <p>{lecturer.position}</p>
          </div>
        )
      }
    </div>
  );
};

LecturersDetails.propTypes = {
  lecturers: PropTypes.array.isRequired
};
