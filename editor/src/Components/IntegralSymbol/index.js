import React from "react";
const dom = eq => ({
  type: "math",
  subtype: "intsymbol",
  children: [{ text: "\u222b " }]
});

const Element = (attributes, children) => {
  return (
    <span className="intsymbol" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
