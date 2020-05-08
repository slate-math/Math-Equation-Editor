import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "prime",
  children: [{ text: "\u2032" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
