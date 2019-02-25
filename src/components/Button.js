import React, { Component} from 'react';


class Button extends Component {



  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  logFormDataToConsole(event) {
    console.log('Form Values', this.props.formValues);
    this.setState({ isClicked: true });
  }

  render() {
    const recipient = `mailto:${this.props.email}`;
    const subject = '?subject=Interested%20Client';
    const body = `&body=${this.props.formValues.message}`

    return (
      <a
        href={`${recipient}${subject}${body}`}
        disabled={this.state.isClicked}
        onClick={this.logFormDataToConsole}
      >
        Contact Us
      </a>
    );
  }
}

export default Button;
