import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u00b7" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return <span {...attributes}>   &#183;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
