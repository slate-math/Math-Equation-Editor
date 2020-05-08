import React from "react";
import arrow from "../Arrow";
import LimIndex from "../LimIndex";
import LimValue from "../LimValue";
import "./index.css";
//import LimImage from '../LimImage.png';

const dom = () => [
  {
    type: "math",
    subtype: "limit",
    children: [LimIndex.slateDOM(), arrow.slateDOM(), LimValue.slateDOM()]
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
    <span className="limit" {...attributes}>
      lim{children}y
    </span>
  );
};


const icon = (attributes, children) => {
  return (
    <>
    <div class="limes">
            <span class="overup">lim</span>
            <span class="overdn">x&rarr;0</span>
        </div>
        y
    </>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon:icon};
