import React, { Component } from 'react';

class AzTrainingTempe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    if(document.getElementById("widget")){
      document.getElementById("widget").remove();
    }
    const scriptTempe = document.createElement("script");
    scriptTempe.src = 'https://squareup.com/appointments/buyer/widget/8ed57df8-85c5-4076-82d4-bdab07318c07/95RCK6V6806HM.js'
    scriptTempe.async = true;
    document.body.appendChild(scriptTempe);
    scriptTempe.setAttribute("id", "widget");
  }


  render() {
    return (
      <div className="container">
        <div className="page-header-large">
          <h1 className="page-header-text">Arizona Training</h1>
        </div>
      </div>
    );
  }
}

export default AzTrainingTempe;
