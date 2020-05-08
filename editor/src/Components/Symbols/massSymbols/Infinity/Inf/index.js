import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "infinity",
  children: [{ text: "\u221e" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
