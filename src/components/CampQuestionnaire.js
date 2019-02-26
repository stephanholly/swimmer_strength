import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class CampQuestionnaire extends Component {
  constructor(props) {
  super(props);
  this.state = {
    startDate: null,
    endDate: null
  };
}

handleChangeStart = (date) => {
  this.setState({
    startDate: date
  });
}

handleChangeEnd = (date) => {
  this.setState({
    endDate: date
  });
}

  render() {
    return (
      <div className="container">
        <h3 className="header-text-form">Let's plan a camp with Swimmer Strength!</h3>
        <div className="form-container">
          <form>
            <div className="inner-form">
              <div className="left-inputs">
                <input className="text-input-contact-first" type="text" placeholder="Name" required/>
                <input className="text-input-contact" type="email" placeholder="Email address" required/>
                <input className="text-input-contact" type="tel" placeholder="Phone" required/>
                <input className="text-input-contact" type="text" placeholder="Your Club/Team" required/>
                <input className="text-input-contact" type="text" placeholder="City" required/>
                <input className="text-input-contact" type="text" placeholder="Country" required/>
                <DatePicker
                    className="text-input-contact-date"
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    placeholderText="Start Date"
                />

                <DatePicker
                    className="text-input-contact-date"
                    style="display: block;"
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    placeholderText="End Date"
                />
              </div>
              <div className="right-inputs">
                <p className="checkbox-text">What would you like included in this camp?</p>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="strength training" id="contactChoice1"/>
                  <label for="contactChoice1">Strength Training</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="swim training" id="contactChoice2"/>
                  <label for="contactChoice2">Swim Training, including facilities</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="dryland" id="contactChoice3"/>
                  <label for="contactChoice3">Dryland Training</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="assistant coaching" id="contactChoice4"/>
                  <label for="contactChoice4">Assistant Swim Coaching</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="start training" id="contactChoice5"/>
                  <label for="contactChoice5">Start Training</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="lectures" id="contactChoice6"/>
                  <label for="contactChoice6">Lectures and Presentations</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="logistics" id="contactChoice7"/>
                  <label for="contactChoice7">Logistics</label>
                </div>
                <textarea name="demographics" className="text-input-textarea-camp" type="text" placeholder="Please describe swimmers including age and demographics"></textarea>
                <textarea name="objectives" className="text-input-textarea-camp" type="text" placeholder="What is your training camp objective?"></textarea>
              </div>
            </div>
            <input className="text-input-submit" type="submit" value="Submit" id="input-submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default CampQuestionnaire;
