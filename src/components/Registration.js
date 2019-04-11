import React, { Component } from 'react';

import RegisterForm from './RegisterForm';

class Registration extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="page-header-reg">
          <h1 className="page-header-text">Registration</h1>
        </div>
        <div className="register-page-form">
        <RegisterForm freeTrial={this.props.location.state.trial !== '' ? this.props.location.state.trial : this.props.location.state.notrial}/>
       </div>
      </div>
    );
  }
}

export default Registration;
