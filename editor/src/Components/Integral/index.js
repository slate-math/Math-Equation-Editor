import React from "react";
import bottomlimit from "../BottomLimit";
import toplimit from "../UpperBound";
import symbol from "../Symbols/IntegralSymbol";
import "./index.css";

const dom = () => [
  {
    type: "math",
    subtype: "integral",
    children: [toplimit.slateDOM(), symbol.slateDOM(), bottomlimit.slateDOM()],
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
    <span className="integral" {...attributes}>
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return (
    <>
      <span class="integral" {...attributes}>
        <span class="toplimit">2&pi;</span>
        <span class="symbol">&int;</span>
        <span class="bottomlimit">0</span>
        {children}
      </span>
    </>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
