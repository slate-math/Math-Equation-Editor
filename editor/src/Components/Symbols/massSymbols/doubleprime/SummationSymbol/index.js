import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u2033" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
