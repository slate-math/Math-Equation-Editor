import React, { useState, useCallback, useMemo } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { Editor, Range, Point, createEditor } from "slate";
import { withHistory } from "slate-history";

const TablesExample = () => {
  const [value, setValue] = useState(initialValue);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withTables(withHistory(withReact(createEditor()))),
    []
  );
  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
};

const withTables = editor => {
  const { deleteBackward, deleteForward, insertBreak } = editor;

  editor.deleteBackward = unit => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: n => n.type === "table-cell"
      });

      if (cell) {
        const [, cellPath] = cell;
        const start = Editor.start(editor, cellPath);

        if (Point.equals(selection.anchor, start)) {
          return;
        }
      }
    }

    deleteBackward(unit);
  };

  editor.deleteForward = unit => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: n => n.type === "table-cell"
      });

      if (cell) {
        const [, cellPath] = cell;
        const end = Editor.end(editor, cellPath);

        if (Point.equals(selection.anchor, end)) {
          return;
        }
      }
    }

    deleteForward(unit);
  };

  editor.insertBreak = () => {
    const { selection } = editor;

    if (selection) {
      const [table] = Editor.nodes(editor, { match: n => n.type === "table" });

      if (table) {
        return;
      }
    }

    insertBreak();
  };

  return editor;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "table":
      return (
        <table>
          <tbody {...attributes}>{children}</tbody>
        </table>
      );
    case "table-row":
      return <tr {...attributes}>{children}</tr>;
    case "table-cell":
      return <td {...attributes}>{children}</td>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  return <span {...attributes}>{children}</span>;
};
const initialValue = [
  {
    type: "table",
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ text: "2" }]
          }
        ]
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ text: "1" }]
          }
        ]
      }
    ]
  }
];

export default TablesExample;
