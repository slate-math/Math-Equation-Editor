import React from "react";
import "./bottomlimit.css";

const dom = eq => ({
  type: "math",
  subtype: "bottomlimit",
  children: [
    {
      type: "input",
      children: [{ text: " " }]
    }
  ]
});

const Element = (attributes, children) => {
  return (
    <span className="bottom-limit" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
