import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import ReactModal from 'react-modal';

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class WorkshopQuestionnaire extends Component {
  constructor(props) {
  super(props);
  this.state = {
    startDate: null,
    endDate: null,
    contactChoice1: false,
    contactChoice2: false,
    contactChoice3: false,
    contactChoice4: false,
    contactChoice5: false,
    contactChoice6: false,
    contactChoice7: false,
    showModal: false
  };
}

handleOpenModal = () =>{
  this.setState({ showModal: true });
}

handleCloseModal = () => {
  this.setState({ showModal: false });
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

handleChoice1 = () => {
  this.setState(prevState => ({
    contactChoice1: !prevState.contactChoice1
  }));
}

handleChoice2 = () => {
  this.setState(prevState => ({
    contactChoice2: !prevState.contactChoice2
  }));
}

handleChoice3 = () => {
  this.setState(prevState => ({
    contactChoice3: !prevState.contactChoice3
  }));
}

handleChoice4 = () => {
  this.setState(prevState => ({
    contactChoice4: !prevState.contactChoice4
  }));
}

handleChoice5 = () => {
  this.setState(prevState => ({
    contactChoice5: !prevState.contactChoice5
  }));
}

handleChoice6 = () => {
  this.setState(prevState => ({
    contactChoice6: !prevState.contactChoice6
  }));
}

handleChoice7 = () => {
  this.setState(prevState => ({
    contactChoice7: !prevState.contactChoice7
  }));
}

resetForm = () => {
  document.getElementById('contact-form').reset();
}

handleSubmit = (e) => {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const club = document.getElementById('club').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const startDate = this.state.startDate
    const endDate = this.state.endDate
    const contactChoice1 = this.state.contactChoice1
    const contactChoice2 = this.state.contactChoice2
    const contactChoice3 = this.state.contactChoice3
    const contactChoice4 = this.state.contactChoice4
    const contactChoice5 = this.state.contactChoice5
    const contactChoice6 = this.state.contactChoice6
    const contactChoice7 = this.state.contactChoice7
    const demographics = document.getElementById('demographics').value;
    const objectives = document.getElementById('objectives').value;

    axios({
        method: "POST",
        url:"https://blooming-thicket-90076.herokuapp.com/send",
        data: {
            type: type,
            name: name,
            email: email,
            telephone: telephone,
            club: club,
            city: city,
            country: country,
            startDate: startDate,
            endDate: endDate,
            contactChoice1: contactChoice1,
            contactChoice2: contactChoice2,
            contactChoice3: contactChoice3,
            contactChoice4: contactChoice4,
            contactChoice5: contactChoice5,
            contactChoice6: contactChoice6,
            contactChoice7: contactChoice7,
            demographics: demographics,
            objectives: objectives
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
          this.handleOpenModal()
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

  render() {
    return (
      <div className="container">
      <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="modal"
       >
       <div className="modal-div">
        <button className="modal-exit" onClick={this.handleCloseModal}>x</button>
          <h1 className="modal-text">Submission Successful!</h1>
          <p className="modal-text">We will get back to you shortly. Please allow up to 72 hours for response time. Thank you for the patience and support of Swimmer Strength!</p>
        </div>
       </ReactModal>
        <h3 className="header-text-form">Let's plan a workshop with Swimmer Strength!</h3>
        <div className="form-container">
          <form className="mobile-form-quest" id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <input type="hidden" id="type" name="workshop" value="workshop"/>
            <div className="inner-form">
              <div className="left-inputs">
                <input id="name" className="text-input-contact-first" type="text" placeholder="Name" required/>
                <input id="email" className="text-input-contact" type="email" placeholder="Email address" required/>
                <input id="telephone" className="text-input-contact" type="tel" placeholder="Phone" required/>
                <input id="club" className="text-input-contact" type="text" placeholder="Your Club/Team" required/>
                <input id="city"className="text-input-contact" type="text" placeholder="City" required/>
                <input id="country" className="text-input-contact" type="text" placeholder="Country" required/>
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
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    placeholderText="End Date"
                />
              </div>
              <div className="right-inputs">
                <p className="checkbox-text">What would you like included in this workshop?</p>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="strength training" id="contactChoice1" onChange={this.handleChoice1}/>
                  <label for="contactChoice1">Strength Training</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="swim training" id="contactChoice2" onChange={this.handleChoice2}/>
                  <label for="contactChoice2">Swim Training, including facilities</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="dryland" id="contactChoice3" onChange={this.handleChoice3}/>
                  <label for="contactChoice3">Dryland Training</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="assistant coaching" id="contactChoice4" onChange={this.handleChoice4}/>
                  <label for="contactChoice4">Assistant Swim Coaching</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="start training" id="contactChoice5" onChange={this.handleChoice5}/>
                  <label for="contactChoice5">Start Training</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="lectures" id="contactChoice6" onChange={this.handleChoice6}/>
                  <label for="contactChoice6">Lectures and Presentations</label>
                </div>
                <div className="text-input-checkbox">
                  <input className="text-input-checkbox" type="checkbox" name="logistics" id="contactChoice7" onChange={this.handleChoice7}/>
                  <label for="contactChoice7">Logistics</label>
                </div>
                <textarea id="demographics" name="demographics" className="text-input-textarea-camp" type="text" placeholder="Please describe swimmers including age and demographics"></textarea>
                <textarea id="objectives" name="objectives" className="text-input-textarea-camp" type="text" placeholder="What is your training camp objective?"></textarea>
              </div>
            </div>
            <input className="text-input-submit" type="submit" value="Submit" id="input-submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default WorkshopQuestionnaire;
