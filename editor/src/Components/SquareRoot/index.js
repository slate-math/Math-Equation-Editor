import React from "react";
import radicand from "../Radicand";
import "./index.css";
const dom = (eq) => ({
  type: "math",
  subtype: "squareroot",
  children: [
    {
      type: "input",
      children: [{ text: "\u221a" }],
    },
  ],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return (
    <>
      <span class="radical">&radic;</span>
      <span class="radicand">
        <i>x</i>
        <sup>2</sup> + 6
      </span>
    </>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
