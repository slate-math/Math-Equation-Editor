import React from "react";
import "./index.css";


const dom = (eq) => ({
  type: "math",
  subtype: "antonioElement",
  children: [
    {
      type: "input",
      children: [{ text: "\u2b1a" }],
    },
  ],
});

const Element = (attributes, children) => {
  return (
    <span className="antonioElement" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
