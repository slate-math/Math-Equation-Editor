import React, { Component } from "react";

const Math = props => {
  return <span {...props}>{props.children}</span>;
};

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
      <span {...this.props.attributes} className="fraction2">
        <Math name="numerator" />
        <hr></hr>
        <Math name="denominator" />
      </span>
    );
  }
}

export default Fraction;
