import React from "react";
const dom = eq => ({
  type: "top limit",
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
    <span className="top-limit" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
