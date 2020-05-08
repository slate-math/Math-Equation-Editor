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
  return <span {...attributes}>   &#x3D0;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
