import React from "react";
const dom = eq => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u01b5" }]
});

const Element = (attributes, children) => {
  return (
    <span contentEditable="false" className="sum-symbol" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
