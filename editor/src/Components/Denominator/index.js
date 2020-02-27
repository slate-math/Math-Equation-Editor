import React from "react";
const dom = () => ({
  type: "denominator",
  subtype: "math",
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
