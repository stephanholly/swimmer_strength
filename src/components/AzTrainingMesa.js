import React, { Component } from 'react';


class AzTrainingMesa extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    if(document.getElementById("widget")){
      document.getElementById("widget").remove();
    }
    const scriptMesa = document.createElement("script");
    scriptMesa.src = 'https://squareup.com/appointments/buyer/widget/3c6a0422-57f3-4d03-9258-c1360999fb3b/Q8CZXZQ71FD3Z.js'
    scriptMesa.async = true;
    document.body.appendChild(scriptMesa);
    scriptMesa.setAttribute("id", "widget");
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

export default AzTrainingMesa;
