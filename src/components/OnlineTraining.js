import React, { Component } from 'react';


class OnlineTraining extends Component {

  componentDidMount () {
    if(document.getElementById("widget")){
      document.getElementById("widget").remove();
    }
    const scriptOnline = document.createElement("script");
    scriptOnline.src = 'https://squareup.com/appointments/buyer/widget/80ef8717-29ba-409b-8bba-af1f5464b811/486DPY5KFF77Z.js'
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
