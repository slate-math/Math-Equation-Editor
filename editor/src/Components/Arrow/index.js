import React from "react";
const dom = () => ({
  type: "math",
  subtype: "arrow",
  children: [
    {
      type: "input",
      children: [{ text: "\u2192" }]
    }
  ]
});

const Element = (attributes, children) => {
  return (
    <span className="arrow" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
