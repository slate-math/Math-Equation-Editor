import React from "react";
import "./index.css";


const dom = (eq) => ({
  type: "math",
  subtype: "antonioElement4",
  children: [
    {
      type: "input",
      children: [{ text: "\u2b1a" }],
    },
  ],
});

const Element = (attributes, children) => {
  return (
    <span className="antonio-Element4" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
