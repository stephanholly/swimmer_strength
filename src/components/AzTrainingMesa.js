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
    scriptMesa.src = 'https://squareup.com/appointments/buyer/widget/5acf2700-412a-42f4-8935-0149348d20e5/Q8CZXZQ71FD3Z.js'
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
