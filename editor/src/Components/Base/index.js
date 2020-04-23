import React from "react";
const dom = () => ({
  type: "math",
  subtype: "base",
  children: [
    {
      type: "input",
      children: [{ text: "x" }]
    }
  ]
});

const Element = (attributes, children) => {
  return (
    <span className="base" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
