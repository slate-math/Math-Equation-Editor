import React from "react";
const dom = () => [
  {
    type: "math",
    subtype: "summationSymbol",
    children: [{ text: "\u297c" }],
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
  return <span {...attributes}>   &#10620;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };