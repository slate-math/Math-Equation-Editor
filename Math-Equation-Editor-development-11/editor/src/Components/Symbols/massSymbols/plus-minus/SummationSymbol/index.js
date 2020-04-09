import React from "react";
const dom = eq => ({
  type: "math",
  subtype: "plusminusSymbol",
  children: [{ text: "\u00b1" }]
});

const Element = (attributes, children) => {
  return (
    <span contentEditable="false" className="sum-symbol" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
