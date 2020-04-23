import React from "react";
import base from "../Base";
import value from "../Value";
import "./index.css";

const dom = () => [
  {
    type: "math",
    subtype: "logarithm",
    children: [base.slateDOM(), value.slateDOM()]
  },
  {
    children: [
      {
        text: " "
      }
    ]
  }
];

const Element = (attributes, children) => {
  return (
    <span className="logarithm" {...attributes}>
      Log {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
