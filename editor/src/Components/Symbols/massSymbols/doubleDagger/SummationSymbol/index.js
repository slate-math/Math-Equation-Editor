import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u2021" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return (
    <span className="int-symbol" {...attributes}>
      {children} &#8225;
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
