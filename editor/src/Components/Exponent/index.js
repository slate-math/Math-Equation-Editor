import React from "react";
const dom = () => [
  {
    type: "math",
    subtype: "exponent",
    children: [
      {
        type: "input",
        children: [{ text: " " }],
      },
    ],
  },
  {
    children: [
      {
        text: " ",
      },
    ],
  },
];

const Element = (attributes, children) => {
  return (
    <span className="exponent" {...attributes}>
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return (
    <>
      <span> x</span>
      <span className="exponent">2</span>
    </>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
