import React from "react";
import "./index.css";

class InputBox extends React.Component {
  handleChange = props => {
    var input = document.getElementById([props.id]);
    input.style.width = 1 + props.value.length * 6 + "px";

    console.log(input);
    if (input.value.length >= 1) {
      input.style.border = "none";
    } else {
      input.style.border = "dashed thin";
    }
    this.props.handleChange(props);
  };

  render() {
    return (
      <div>
        id={this.props.name}
        className="inputContainer" type="text" onChange=
        {input => this.handleChange(input.target)}
      </div>
    );
  }
}

export default InputBox;
