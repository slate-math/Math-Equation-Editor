import React from "react";
const dom = eq => ({
  type: "math",
  subtype: "intsymbol",
  children: [{ text: "\u222b " }]
});

const Element = (attributes, children) => {
  return (
    <span contentEditable="false" className="int-symbol" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
