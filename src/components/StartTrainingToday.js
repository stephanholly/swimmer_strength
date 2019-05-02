import React, { Component } from 'react';

class StartTrainingToday extends Component {
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
    scriptTempe.src = 'https://squareup.com/appointments/buyer/widget/9a869c9b-f4d2-41d1-b64b-0a9ce2016a19/Q8CZXZQ71FD3Z.js'
    scriptTempe.async = true;
    document.body.appendChild(scriptTempe);
    scriptTempe.setAttribute("id", "widget");
  }


  render() {
    return (
      <div className="container">
        <div className="page-header-large">
          <h1 className="page-header-text">Registration</h1>
        </div>
      </div>
    );
  }
}

export default StartTrainingToday;
