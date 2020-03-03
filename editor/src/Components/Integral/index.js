import React from "react";
import bottomlimit from "../BottomLimit";
import toplimit from "../UpperBound";
import symbol from "../IntegralSymbol";
import "./index.css";

const dom = () => ({
  type: "math",
  subtype: "integral",
  children: [toplimit.slateDOM(), symbol.slateDOM(), bottomlimit.slateDOM()]
});

const Element = (attributes, children) => {
  return (
    <span className="integral" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
