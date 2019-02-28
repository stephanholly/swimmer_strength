import React, { Component } from 'react';


class RegisterForm extends Component {

  alert=()=>{
    alert("thank you for subscribing! We will reach out to you with more information soon!")
  }

  render() {
    return (
      <div className="container">
        <h3 className="header-text-form2">Introduce yourself to get started on improving your swimming and strength with Swimmer Strength!</h3>
        <div className="form-container">
          <form action="https://swimmerstrength.us20.list-manage.com/subscribe/post?u=4b4c58543e446a8afa2e17ebb&amp;id=338ee2ec3a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" >
            <div className="inner-form">
              <div className="left-inputs">
                <input className="text-input-contact-first required" type="text" placeholder="Name"  name="NAME" id="mce-NAME"/>
                <input className="text-input-contact required" type="email" placeholder="Email address"  name="EMAIL" id="mce-EMAIL"/>
                <input className="text-input-contact required" type="text" placeholder="Subject" name="SUBJECT" id="mce-SUBJECT"/>
              </div>
              <div className="right-inputs">
                <textarea name="message" className="text-input-textarea required" type="text" placeholder="Message" name="MESSAGE" id="mce-MESSAGE"></textarea>
              </div>
            </div>
            <input className="text-input-submit" type="submit" value="Subscribe" name="subscribe" onClick={()=> this.alert()}/>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
