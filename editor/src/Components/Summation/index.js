import React from "react";
import bottomlimit from "../BottomLimit";
import toplimit from "../UpperBound";
import symbol from "../Symbols/SummationSymbol";
import "./index.css";

const dom = () => [
  {
    type: "math",
    subtype: "summation",
    children: [toplimit.slateDOM(), symbol.slateDOM(), bottomlimit.slateDOM()]
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
    <span className="summation" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
