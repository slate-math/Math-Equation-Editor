import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Editor, Transforms, Range, createEditor } from "slate";
import { useMemo, useState, useCallback, useRef, useEffect } from "react";
import { Portal } from "./Portal";
import Fraction from "./Fraction";
import InputBox from "./Fraction";
import {
  Slate,
  Editable,
  withReact,
  ReactEditor,
  useSelected,
  useFocused
} from "slate-react";

const initialValue = [
  {
    children: [
      {
        text: "Start typing your equation here!"
      }
    ]
  }
];

const EQUATIONS = ["frac{1}{2}", "int_{a}^{b}", "integer", "lim_{lower}"];

const App = () => {
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
            insertMention(editor, chars[index]);
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
        placeholder="Enter equation"
      />
      {target && chars.length > 0 && (
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

const withAutoFill = editor => {
  const { isInline, isVoid } = editor;
  editor.isInline = element => {
    return element.type === "mention" ? true : isInline(element);
  };
  editor.isVoid = element => {
    return element.type === "mention" ? true : isVoid(element);
  };
  return editor;
};

const insertMention = (editor, character) => {
  const mention = { type: "mention", character, children: [{ text: "" }] };
  Transforms.insertNodes(editor, mention);
  Transforms.move(editor);
};

const Element = props => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case "mention":
      return <Fraction {...attributes} {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default App;
