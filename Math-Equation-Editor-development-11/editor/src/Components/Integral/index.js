import React from "react";
import bottomlimit from "../BottomLimit";
import toplimit from "../UpperBound";
import symbol from "../Symbols/IntegralSymbol";
import pic from "../images/integral.png";
import "./index.css";

const dom = () => [
  {
    type: "math",
    subtype: "integral",
    children: [toplimit.slateDOM(), symbol.slateDOM(), bottomlimit.slateDOM()]
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
    <span className="integral" {...attributes}>
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return <image src={pic} alt="equation logo" />;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
