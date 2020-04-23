import React from "react";
import "./App.css";
import { Editor, Transforms, Range, createEditor } from "slate";
import { useMemo, useState, useCallback, useRef, useEffect } from "react";
import { Portal } from "./Portal";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import components from "./Components";
//import Button from "./components";
// This is what's shown when editor is first displayed
const initialValue = [
  {
    children: [
      {
        text: 'Type "\\" and a character to begin',
      },
    ],
  },
];

// The different choices available in the drop-down box
const EQUATIONS = Object.keys(components);

const App = () => {
  // A bunch of stuff needed for the Slate Editor
  const ref = useRef();
  const editor = useMemo(() => editorLayout(withReact(createEditor())), []);
  const [target, setTarget] = useState();
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const [value, setValue] = useState(initialValue);

  const chars = EQUATIONS.filter((c) =>
    c.toLowerCase().startsWith(search.toLowerCase())
  ).slice(0, 20);

  // Custom hotkeys for our editor
  const onKeyDown = useCallback(
    (event) => {
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
      } else {
        switch (event.key) {
          case "/":
            event.preventDefault();
            Transforms.select(editor, target);
            insertEquation(editor, "fraction");
            setTarget(null);
            break;
          case "^":
            event.preventDefault();
            Transforms.select(editor, target);
            insertEquation(editor, "exponent");
            setTarget(null);
            break;
        }
      }
    },
    [index, search, target, editor, chars]
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
      onChange={(value) => {
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
            setSearch(beforeMatch[1]);
            setTarget(beforeRange);
            //setSearch(beforeMatch[1]);
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
              boxShadow: "0 1px 5px rgba(0,0,0,.2)",
            }}
          >
            {chars.map((char, i) => (
              <div
                key={char}
                style={{
                  padding: "1px 3px",
                  borderRadius: "3px",
                  background: i === index ? "#B4D5FF" : "transparent",
                }}
              >
                {char}
                {hasLatex(char)}
                {hasIcon(char)}
              </div>
            ))}
          </div>
        </Portal>
      )}
    </Slate>
  );
};

// ToDo: Add a border around empty math fields in our normalizer.
const editorLayout = (editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    // If we are in a math node
    if (node.type === "math") {
      // If the child node is empty, insert css border
      if (editor.children.length < 1) {
        const borderedBox = { subtype: "border", children: [{ text: "" }] };
        Transforms.insertNodes(editor, borderedBox, { at: path.concat(0) });
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

/**
 * This methods checks to see if an equation component has an icon property. It prevents
 * the app from crashing when an icon isn't found.
 *
 * @param {string} eq   The name of the equation being looked up via intellisense hotkey
 */
const hasIcon = (eq) => {
  try {
    if (!components[eq].Icon()) throw "No icon found";
    return components[eq].Icon();
  } catch (err) {
    console.log(err);
  }
};

/**
 * This methods checks to see if an equation component has a LaTeX property. It prevents
 * the app from crashing if a latex equivalent isn't found.
 *
 * @param {string} eq   The name of the equation being looked up via intellisense hotkey
 */
const hasLatex = (eq) => {
  try {
    if (!components[eq].LaTeX()) throw "No latex command found";
    return components[eq].LaTeX();
  } catch (err) {
    console.log(err);
  }
};

const latexToDom = {
  frac: "fraction",
};

/**
 * Inserts an equation's SlateDOM into the tree
 *
 * @param {string} eq   The name of the equation being looked up via intellisense hotkey
 */
const insertEquation = (editor, eq) => {
  let equation = {
    children: [{ text: "" }],
  };
  //var component = latexToDom[eq];
  //console.log(component);
  try {
    if (!EQUATIONS.includes(eq)) throw "Equation not supported";
    equation = components[eq].slateDOM();
  } catch (err) {
    console.log(err);
  }

  Transforms.insertNodes(editor, equation);
  Transforms.move(editor);
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "math":
      switch (element.subtype) {
        case "border":
          return (
            <div className={`mathtext ${content === null ? "empty" : ""}`}>
              {content}
            </div>
          );
      }
      return components[element.subtype].MathElement(attributes, children); // todo: error checking
    default:
      return <span {...attributes}>{children}</span>;
  }
};

/* const EquationButton = ({ eq, icon }) => {
  const editor = useSlate();
  return (
    <Button
      onMouseDown={event => {
        event.preventDefault();
        insertEquation(editor, eq);
      }}
    ></Button>
  );
}; */

export default App;
