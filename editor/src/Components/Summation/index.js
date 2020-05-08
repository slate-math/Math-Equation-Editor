import React from "react";
import bottomlimit from "../BottomLimit";
import toplimit from "../UpperBound";
import symbol from "../Symbols/SummationSymbol";
import "./index.css";

const dom = () => [
  {
    type: "math",
    subtype: "summation",
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
    <span className="summation" {...attributes}>
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return (
    <>
      <div class="summation">
        <span className="top-limit-ico">5</span>
        <span className="sum-symbol-ico">&sum;</span>
        <span class="bottom-limit-ico">x=1</span>
      </div>
      x
    </>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
