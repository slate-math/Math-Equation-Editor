import React from "react";
import numerator from "../Numerator";
import denominator from "../Denominator";
import "./index.css";

const dom = (a) => [
  {
    type: "latex",
    subtype: "frac",
    children: [numerator.slateDOM(), denominator.slateDOM()],
  },
  {
    children: [
      {
        text: a,
      },
    ],
  },
];

const Element = (attributes, children) => {
  return (
    <span className="fraction" {...attributes}>
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return (
    <span className="fraction-icon" {...attributes}>
      <span>x</span>
      <span class="denominator-icon">y</span>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
