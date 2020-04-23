import React from "react";
const dom = () => ({
  type: "math",
  subtype: "value",
  children: [
    {
      type: "input",
      children: [{ text: "y" }]
    }
  ]
});

const Element = (attributes, children) => {
  return (
    <span className="value" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
