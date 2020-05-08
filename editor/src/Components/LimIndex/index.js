import React from "react";
const dom = () => ({
  type: "math",
  subtype: "LimIndex",
  children: [
    {
      type: "input",
      children: [{ text: "x" }]
    }
  ]
});

const Element = (attributes, children) => {
  return (
    <span className="LimIndex" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
