import React from "react";
const dom = () => ({
  type: "math",
  subtype: "LimValue",
  children: [
    {
      type: "input",
      children: [{ text: "0" }]
    }
  ]
});

const Element = (attributes, children) => {
  return (
    <span className="LimValue" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
