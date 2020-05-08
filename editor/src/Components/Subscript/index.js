import React from "react";
import "./index.css";
const dom = () => [
  {
    type: "math",
    subtype: "subscript",
    children: [
      {
        type: "input",
        children: [{ text: "x" }],
      },
    ],
  },
  {
    children: [
      {
        text: " ",
      },
    ],
  },
];

const Element = (attributes, children) => {
  return (
    <span className="subscript" {...attributes}>
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return (
    <>
      <span> x</span>
      <span className="subscript">2</span>
    </>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
