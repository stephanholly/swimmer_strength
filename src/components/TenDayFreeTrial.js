import React, { Component } from 'react';
import TenDayForm from './TenDayForm';

class TenDayFreeTrial extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="page-header-reg-trial">
          <h1 className="page-header-text">10-Day Free Trial</h1>
        </div>
        <div className="register-page-form">
        <TenDayForm/>
       </div>
      </div>
    );
  }
}

export default TenDayFreeTrial;
