import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "tildeSymbol",
  children: [{ text: "\u007e" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
