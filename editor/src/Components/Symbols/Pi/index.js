import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "symbol",
  children: [{ text: "\u03c0 " }],
});

const Element = (attributes, children) => {
  return (
    <span contentEditable="false" className="pi-symbol" {...attributes}>
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return (
    <span className="pi-symbol" {...attributes}>
      {children} &#960;
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
