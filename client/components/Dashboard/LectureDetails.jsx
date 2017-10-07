import React, { PropTypes } from 'react';

export const LectureDetails = ({lectures}) => {
  return (
    <div>
      {
        lectures.map((lecture, index) =>
          <div key={index} className="row notes-wrapper">
            <div className="col-sm-12 col-md-9">
              <h5 className="lecture-details">{lecture.title}</h5>
              <p className="lecture-details description">{lecture.description}</p>
              <p className="lecture-details upload-date">{lecture.date_updated}</p>
            </div>
            <div className="col-sm-12 col-md-3">
              <button className="btn btn-default download">
                Download <i className="glyphicon glyphicon-download-alt" />
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

LectureDetails.propTypes = {
  lectures: PropTypes.array.isRequired
};
