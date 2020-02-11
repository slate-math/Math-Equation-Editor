import React, { Component } from "react";
import InputBox from "./InputBox";

class Fraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numerator: "",
      denominator: ""
    };
  }

  handleChange = props => {
    this.setState({ [props.id]: props.value });
  };

  render() {
    return (
      <span  className="fraction2">
        <InputBox handleChange={this.handleChange} name="numerator" />
        <hr></hr>
        <InputBox handleChange={this.handleChange} name="denominator" />
      </span>
    );
  }
}

export default Fraction;
