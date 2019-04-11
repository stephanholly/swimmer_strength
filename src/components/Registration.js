import React, { Component } from 'react';

import RegisterForm from './RegisterForm';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="page-header-reg">
          <h1 className="page-header-text">Registration</h1>
        </div>
        <div className="register-page-form">
        <RegisterForm freeTrial={ this.props.location.state? this.props.location.state.trial : ''}/>
       </div>
      </div>
    );
  }
}

export default Registration;
