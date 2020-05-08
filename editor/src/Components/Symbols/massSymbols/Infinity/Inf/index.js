import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "infinity",
  children: [{ text: "\u221e" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return <span {...attributes}>   &#8734;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
