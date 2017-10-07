import React, { Component } from 'react';
import { LecturersDetails } from './LecturersDetails.jsx';
import { LectureDetails } from './LectureDetails.jsx';
import { Lecturers } from '../../assets/data/Lecturers';
import { Lectures } from '../../assets/data/Lectures';

const questions = [
  'Do you know React?',
  'What is computer science?',
  'What is the full meaning of JSX?',
  'Are you NORMAL?',
];

export class CourseDetails extends Component {
  constructor () {
    super();

    this.state = {
      curQuestion: 1,
      disabled: false
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    if (this.state.curQuestion === questions.length - 1) {
      this.setState((prev) => {
          return {
            curQuestion: prev.curQuestion + 1,
            disabled: true
          };
        });
    } else if (this.state.curQuestion < questions.length) {
        this.setState((prev) => {
          return {
            curQuestion: prev.curQuestion + 1
          };
        });
    }
  }

  render() {
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
            <div className="row">
              <div className="col-md-3">
                <h1>Sidebar here</h1>
              </div>
              <div className="col-md-9">
                <div
                  style={{
                    backgroundColor: '#000000',
                    height: '200px',
                    padding: '20px 40px',
                    color: '#ffffff'
                  }}>
                  <h4>{questions[this.state.curQuestion - 1]}</h4>
                </div>
                <div>
                  <h4>Prove yourself here</h4>
                  <textarea name="" id="" cols="30" rows="6" style={{width: '100%'}} />
                  <button className="btn btn-pagination">Previous</button>
                  <button disabled={this.state.disabled} className="btn btn-pagination pull-right" onClick={this.nextQuestion}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
