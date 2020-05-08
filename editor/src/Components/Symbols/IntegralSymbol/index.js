import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "intsymbol",
  children: [{ text: "\u222b " }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return <span {...attributes}>{children} &#8747;</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
