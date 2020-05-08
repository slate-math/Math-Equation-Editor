import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "radicand",
  children: [
    {
      type: "input",
      children: [{ text: "" }],
    },
  ],
});

const Element = (attributes, children) => {
  return (
    <span className="radicand" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
