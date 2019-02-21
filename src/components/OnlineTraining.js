import React, { Component } from 'react';


class OnlineTraining extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://squareup.com/appointments/buyer/widget/3c6a0422-57f3-4d03-9258-c1360999fb3b/95RCK6V6806HM.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="container">
        <div className="page-header-large">
          <h1 className="page-header-text">Online Training</h1>
        </div>
      </div>
    );
  }
}

export default OnlineTraining;
