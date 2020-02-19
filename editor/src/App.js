import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Editor, Transforms, Range, createEditor } from "slate";
import { useMemo, useState, useCallback, useRef, useEffect } from "react";
import { Portal } from "./Portal";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

// This is what's shown when editor is first displayed
const initialValue = [
  {
    children: [
      {
        text: "Start typing your equation here!"
      }
    ]
  }
];

// The different choices available in the drop-down box
const EQUATIONS = ["frac{1}{2}", "int_{a}^{b}", "integer", "lim_{lower}"];

const App = () => {
  // A bunch of stuff needed for the Slate Editor
  const ref = useRef();
  const editor = useMemo(() => withAutoFill(withReact(createEditor())), []);
  const [target, setTarget] = useState();
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");
  const renderElement = useCallback(props => <Element {...props} />, []);
  const [value, setValue] = useState(initialValue);

  const chars = EQUATIONS.filter(c =>
    c.toLowerCase().startsWith(search.toLowerCase())
  ).slice(0, 10);

  // Custom hotkeys for our editor
  const onKeyDown = useCallback(
    event => {
      if (target) {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            const prevIndex = index >= chars.length - 1 ? 0 : index + 1;
            setIndex(prevIndex);
            break;
          case "ArrowUp":
            event.preventDefault();
            const nextIndex = index <= 0 ? chars.length - 1 : index - 1;
            setIndex(nextIndex);
            break;
          case "Tab":
          case "Enter":
            event.preventDefault();
            Transforms.select(editor, target);
            insertEquation(editor, chars[index]);
            setTarget(null);
            break;
          case "Escape":
            event.preventDefault();
            setTarget(null);
            break;
        }
      }
    },
    [index, search, target]
  );

  // The structure of the dropdown
  useEffect(() => {
    if (target && chars.length > 0) {
      const el = ref.current;
      const domRange = ReactEditor.toDOMRange(editor, target);
      const rect = domRange.getBoundingClientRect();
      el.style.top = `${rect.top + window.pageYOffset + 24}px`;
      el.style.left = `${rect.left + window.pageXOffset}px`;
    }
  }, [chars.length, editor, index, search, target]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        setValue(value);
        const { selection } = editor;

        // When our intellisense hotkey is pressed (forwardslash - \), all proceeding text is used for the dropdown prompt
        if (selection && Range.isCollapsed(selection)) {
          const [start] = Range.edges(selection);
          const wordBefore = Editor.before(editor, start, { unit: "word" });
          const before = wordBefore && Editor.before(editor, wordBefore);
          const beforeRange = before && Editor.range(editor, before, start);
          const beforeText = beforeRange && Editor.string(editor, beforeRange);
          const beforeMatch = beforeText && beforeText.match(/^\\(\w+)$/);
          const after = Editor.after(editor, start);
          const afterRange = Editor.range(editor, start, after);
          const afterText = Editor.string(editor, afterRange);
          const afterMatch = afterText.match(/^(\s|$)/);

          if (beforeMatch && afterMatch) {
            setTarget(beforeRange);
            setSearch(beforeMatch[1]);
            setIndex(0);
            return;
          }
        }

        setTarget(null);
      }}
    >
      <Editable
        renderElement={renderElement}
        onKeyDown={onKeyDown}
        placeholder="Enter equation" // If there's no text on the screen, display this
      />
      {target && chars.length > 0 && (
        // Not entirely sure what this is. I think it's more styling for the dropdown
        <Portal>
          <div
            ref={ref}
            style={{
              top: "-9999px",
              left: "-9999px",
              position: "absolute",
              zIndex: 1,
              padding: "3px",
              background: "white",
              borderRadius: "4px",
              boxShadow: "0 1px 5px rgba(0,0,0,.2)"
            }}
          >
            {chars.map((char, i) => (
              <div
                key={char}
                style={{
                  padding: "1px 3px",
                  borderRadius: "3px",
                  background: i === index ? "#B4D5FF" : "transparent"
                }}
              >
                {char}
              </div>
            ))}
          </div>
        </Portal>
      )}
    </Slate>
  );
};

// Not sure what to do with this. Will figure it out later
const withAutoFill = editor => {
  const { isInline, isVoid } = editor;
  editor.isInline = element => {
    return element.type === "fraction" ? true : isInline(element);
  };
  editor.isVoid = element => {
    return element.type === "fraction" ? true : isVoid(element);
  };
  return editor;
};

//--------------------------ToDo--------------------------
//step 1 -- create slate node (a.k.a Slate DOM)
const insertEquation = editor => {
  const fraction = {
    type: "math",
    children: [
      {
        type: "numerator",
        children: [
          {
            type: "input",
            children: [{ text: "2" }]
          }
        ]
      },
      {
        type: "denominator",
        children: [
          {
            type: "input",
            children: [{ text: "9" }]
          }
        ]
      }
    ]
  };
  Transforms.insertNodes(editor, fraction);
  Transforms.move(editor);
};

const Element = ({ attributes, children, element }) => {
  // Step 2 -- This returns the HTML representation of each node. We want to turn this into a React component in a separate file
  switch (element.type) {
    case "math":
      return (
        <span className="fraction" {...attributes}>
          {children}
        </span>
      );
    case "numerator":
      return (
        <span className="numerator" {...attributes}>
          {children}
        </span>
      );
    case "denominator":
      return (
        <span className="denominator" {...attributes}>
          {children}
        </span>
      );
    default:
      return <span {...attributes}>{children}</span>;
  }
};

export default App;
