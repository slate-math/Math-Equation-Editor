import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "betaSymbol",
  children: [{ text: "\u03d0" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return <span {...attributes}>{children} &#882;</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
