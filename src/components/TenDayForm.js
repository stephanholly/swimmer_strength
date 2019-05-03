import React, { Component } from 'react';
import ReactModal from 'react-modal';

import axios from 'axios';


class TenDayForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    showModal: false,
    loading: false,
    contactChoice1: false,
  };
}

handleLoad = () => {
  console.log('butt')
  this.setState(prevState => ({
    loading: !prevState.loading
  }));
  console.log('butt', this.state.loading)

}

  handleOpenModal = () =>{
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleChoice1 = () => {
    this.setState(prevState => ({
      contactChoice1: !prevState.contactChoice1
    }));
  }

  resetForm = () => {
    document.getElementById('contact-form').reset();
  }

  toggleShow = () => {
    var x = document.getElementById("consent");
    console.log('k')
     if (x.style.whiteSpace === "nowrap") {
       x.style.whiteSpace = "normal";
     } else {
       x.style.whiteSpace = "nowrap";
     }
  }

  handleSubmit = (e) => {
      e.preventDefault();

      if(!this.state.contactChoice1){
        alert('You must agree to the terms before you can submit the form.')
        return;
      }

      this.handleLoad()

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const who1 = document.getElementById('who1').value;
      const who2 = document.getElementById('who2').value;
      const experience = document.getElementById('experience').value;
      const age = document.getElementById('age').value;
      const goal = document.getElementById('goal').value;

      axios({
          method: "POST",
          url:"https://blooming-thicket-90076.herokuapp.com/tenDayFormSubmit",
          data: {
              name: name,
              email: email,
              who1: who1,
              who2: who2,
              experience: experience,
              age: age,
              goal: goal

          }
      }).then((response)=>{
          if (response.data.msg === 'success'){
            this.handleLoad()
            this.handleOpenModal()
              this.resetForm()
          }else if(response.data.msg === 'fail'){
              console.log(response.data)
              alert("Message failed to send.")
              this.handleLoad()
          }
      })
  }

  render() {
    return (
      <div className="container">
        <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            className="modal-ten"
         >
          <div className="modal-div">
           <button className="modal-exit" onClick={this.handleCloseModal}>X</button>
             <h1 className="modal-text-ten-header">Submission Successful!</h1>
             <p className="modal-text">Thank you for choosing to try the Swimmer Strength online strength programs.</p>
             <p className="modal-text">Please allow 72-hours of processing your information, while expecting an email from "Train Heroic" to get instructions to download the app, which will have exercise videos, sets, and repetitions for your convenience. If this form was not filled out properly and honestly, you may risk not receiving any workouts. Stay healthy, stay strong.</p>
           </div>
         </ReactModal>
        <h3 className="header-text-form2">Get your sample science-based training program that will<br/> include: proper warm-ups, mobility, core training, general body awareness and more!</h3>
        <div className="form-container">
          <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <input type="hidden" id="type" name="contact" value="contact"/>
            <div className="inner-form">
              <div className="left-inputs">
                <input id="name" className="text-input-contact required" type="text" placeholder="Name"  name="NAME" required/>
                <input id="email" className="text-input-contact required" type="text" placeholder="Email"  name="EMAIL" required/>
                <input id="who1" className="text-input-contact required" type="text" placeholder="Are the workouts for you?" name="WHO1" required/>
                <input id="who2" className="text-input-contact required" type="text" placeholder="If not, for whom?" name="WHO2" />
              </div>
              <div className="right-inputs">
                <input id="age" className="text-input-contact required" type="text" placeholder="Age of trainee"  name="AGE" required/>
                <input id="experience" className="text-input-contact required" type="text" placeholder="Dryland/strength experience (1-10)" name="WHO2" required/>
                <textarea id="goal" name="goal" className="text-input-textarea required" type="text"placeholder="Goal/Objective" required/>
              </div>
            </div>
            <div className="text-input-checkbox-consent" >
              <input className="text-input-checkbox-consent" type="checkbox" name="start training" id="contactChoice1" onChange={this.handleChoice1}/>
              <label id="consent" for="contactChoice1">By submitting this form, I hereby give consent to engage in voluntary physical exercise without the supervision of a Swimmer Strength Certified coach. I have been truthful in filling out this form, and ensure that it is I, or a guardian over the age of 18 submitting to submit this form. I understand and have been informed that physical exercise can have effect, but not be limited to, abnormal blood pressure, fainting, dizziness, and disorders of heart rhythm. I further understand that there exist the risk of bodily harm including, but not limited to injuries to muscles, ligaments, tendons, and joints to the body; however, it is clear to me that every effort will be made to minimize these occurrences by proper and safe program design, with appropriate progressions and regressions based on the information I have provided above. Lastly, I have been informed that all of the information obtained in this high-performance training program will be treated as privileged and confidential and will consequently not be released or reveled to any person without my express written consent. </label>
            </div>
            { !this.state.loading ?

            <input className="text-input-submit" type="submit" value="submit" id="input-submit"/>
            :
             <div className="spinner"></div>}
          </form>
        </div>
      </div>
    );
  }
}

export default TenDayForm;
