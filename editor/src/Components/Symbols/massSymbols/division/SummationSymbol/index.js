import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "divisionSymbol",
  children: [{ text: "\u00f7" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
