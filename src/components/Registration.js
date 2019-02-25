import React, { Component } from 'react';

import RegisterForm from './RegisterForm';

class Registration extends Component {

  render() {
    return (
      <div className="container">
        <div className="page-header-reg">
          <h1 className="page-header-text">Registration</h1>
        </div>
        <div className="register-page-form">
        <RegisterForm />
       </div>
      </div>
    );
  }
}

export default Registration;
