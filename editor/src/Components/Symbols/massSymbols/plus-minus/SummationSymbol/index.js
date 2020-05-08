import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "plusminusSymbol",
  children: [{ text: " \u00b1" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return <span {...attributes}> &#177;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
