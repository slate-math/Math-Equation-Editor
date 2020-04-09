import React from "react";
const dom = () => [
  {
    type: "math",
    subtype: "exponent",
    children: [
      {
        type: "input",
        children: [{ text: " " }]
      }
    ]
  },
  {
    children: [
      {
        text: " "
      }
    ]
  }
];

const Element = (attributes, children) => {
  return (
    <span className="exponent" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
