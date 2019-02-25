import React, { Component } from 'react';


class RegisterForm
 extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="header-text-form">Introduce yourself to get started on improving your swimming and strength with Swimmer Strength!</h3>
        <div className="form-container">
          <form>
            <div className="inner-form">
              <div className="left-inputs">
                <input className="text-input-contact-first" type="text" placeholder="Name"/>
                <input className="text-input-contact" type="email" placeholder="Email address"/>
                <input className="text-input-contact" type="text" placeholder="Subject"/>
              </div>
              <div className="right-inputs">
                <textarea name="message" className="text-input-textarea" type="text" placeholder="Message"></textarea>
              </div>
            </div>
            <input className="text-input-submit" type="submit" value="Submit" id="input-submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm
;
