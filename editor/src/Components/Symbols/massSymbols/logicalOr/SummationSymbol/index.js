import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u22c1" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
