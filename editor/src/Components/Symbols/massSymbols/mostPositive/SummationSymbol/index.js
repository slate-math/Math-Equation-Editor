import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u223e" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};


const icon = (attributes, children) => {
  return <span {...attributes}>   &#8766;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };