import React from "react";
const dom = () => [
  {
    type: "math",
    subtype: "summationSymbol",
    children: [{ text: "\ud6ae" }],
  },
  {
    children: [
      {
        text: "",
      },
    ],
  },
];

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return <span {...attributes}>   &#54958;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };