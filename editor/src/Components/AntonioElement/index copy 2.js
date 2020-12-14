import React from "react";
import "./index.css";


const dom = (eq) => ({
  type: "math",
  subtype: "antonioElement2",
  children: [
    {
      type: "input",
      children: [{ text: "\u2b1a" }],
    },
  ],
});

const Element = (attributes, children) => {
  return (
    <span className="antonio-Element2" {...attributes} >
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
