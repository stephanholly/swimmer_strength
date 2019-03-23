import React, { Component } from 'react';
import ReactModal from 'react-modal';

import axios from 'axios';


class RegisterForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    showModal: false,
    loading: false,
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

  resetForm = () => {
    document.getElementById('contact-form').reset();
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.handleLoad()
      const type = document.getElementById('type').value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      axios({
          method: "POST",
          url:"https://blooming-thicket-90076.herokuapp.com/sendContact",
          data: {
              type: type,
              name: name,
              email: email,
              subject: subject,
              message: message

          }
      }).then((response)=>{
          if (response.data.msg === 'success'){
            this.handleLoad()
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
           <button className="modal-exit" onClick={this.handleCloseModal}>X</button>
             <h1 className="modal-text">Submission Successful!</h1>
             <p className="modal-text">We will reach out to you soon.</p>
             <p className="modal-text">Submission Successful! We will reach out to you soon. Thank you for your interest in Swimmer Strength!</p>
           </div>
         </ReactModal>
        <h3 className="header-text-form2">Introduce yourself to get started on improving your swimming and strength with Swimmer Strength!</h3>
        <div className="form-container">
          <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <input type="hidden" id="type" name="contact" value="contact"/>
            <div className="inner-form">
              <div className="left-inputs">
                <input id="name" className="text-input-contact-first required" type="text" placeholder="Name"  name="NAME" required/>
                <input id="email" className="text-input-contact required" type="email" placeholder="Email address"  name="EMAIL" required/>
                <input id="subject" className="text-input-contact required" type="text" placeholder="Subject" name="SUBJECT" required/>
              </div>
              <div className="right-inputs">
                <textarea id="message" name="message" className="text-input-textarea required" type="text" placeholder="Message" required></textarea>
              </div>
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

export default RegisterForm;
