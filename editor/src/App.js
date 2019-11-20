import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Editor } from "slate-react";
import { Value } from "slate";
import AutoReplace from "./plugin/AutoComplete.js";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: "Enter equation."
          }
        ]
      }
    ]
  }
});

const replace = AutoReplace({
  trigger: "space",
  before: /(\\frac)/,
  change: (change, e, matches) => {
    return change.setBlocks({ type: "quote" });
  }
});

const plugins = [replace];

// Define our app...
class App extends React.Component {
  // Set the initial value when the app is first constructed.
  state = {
    value: initialValue
  };

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    this.setState({ value });
  };

  // Render the editor.
  render() {
    return (
      <Editor
        plugins={plugins}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

export default App;
