import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u27d6" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return <span {...attributes}>   &#10198;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };