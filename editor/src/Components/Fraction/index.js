import React from "react";
import numerator from "../Numerator";
import denominator from "../Denominator";
import "./index.css";

const dom = () => ({
  type: "math",
  subtype: "fraction",
  children: [numerator.slateDOM(), denominator.slateDOM()]
});

const Element = (attributes, children) => {
  return (
    <span className="fraction" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
