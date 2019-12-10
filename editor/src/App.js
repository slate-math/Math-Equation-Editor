import React from "react";
import "./App.css";
import { createEditor } from "slate";
import { useMemo, useState } from "react";
import { Slate, Editable, withReact } from "slate-react";

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [selection, setSelection] = useState(null);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      selection={selection}
      onChange={(value, selection) => {
        setValue(value);
        setSelection(selection);
      }}
    >
      <Editable />
    </Slate>
  );
};

export default App;
