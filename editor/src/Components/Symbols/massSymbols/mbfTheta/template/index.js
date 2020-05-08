import React from "react";
const dom = () => [
  {
    type: "math",
    subtype: "summationSymbol",
    children: [{ text: "\ud6af" }],
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
  return <span {...attributes}>   &#54959;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };