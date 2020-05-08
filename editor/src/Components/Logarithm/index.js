import React from "react";
import base from "../Base";
import "./index.css";

const dom = () => [
  {
    type: "math",
    subtype: "logarithm",
    children: [base.slateDOM()]
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
    <span className="logarithm" {...attributes}>
      log {children} 
    </span>
  );
};


const icon = (attributes, children) => {
  return (
    <>
    <span class="log">        log</span>
    <span class="logbase">2</span>
    <span class="logvalue">x</span>
    </>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
