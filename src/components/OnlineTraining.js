import React, { Component } from 'react';


class OnlineTraining extends Component {

  componentDidMount () {
    if(document.getElementById("widget")){
      document.getElementById("widget").remove();
    }
    const scriptOnline = document.createElement("script");
    scriptOnline.src = 'https://squareup.com/appointments/buyer/widget/3c6a0422-57f3-4d03-9258-c1360999fb3b/486DPY5KFF77Z.js'
    scriptOnline.async = true;
    document.body.appendChild(scriptOnline);
    scriptOnline.setAttribute("id", "widget");
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
