import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "ApproxSymbol",
  children: [{ text: "\u2248" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
