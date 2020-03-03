import React from "react";
const dom = () => ({
  type: "math",
  subtype: "denominator",
  children: [
    {
      type: "input",
      children: [{ text: " " }]
    }
  ]
});

const Element = (attributes, children) => {
  return (
    <span className="denominator" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
