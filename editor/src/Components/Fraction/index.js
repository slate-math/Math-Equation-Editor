import React from "react";
import numerator from "../Numerator";
import denominator from "../Denominator";

const dom = () => ({
  type: "fraction",
  subtype: "math",
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
