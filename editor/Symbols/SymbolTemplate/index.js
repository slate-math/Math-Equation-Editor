import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "symbol",
  children: [{ text: "\u " }], //ToDo: insert unicode for the symbol here
});

const Element = (attributes, children) => {
  return (
    <span contentEditable="false" className="int-symbol" {...attributes}>
      {/*leave this as-is for now*/}
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return (
    <span className="int-symbol" {...attributes}>
      {/*if you changed the classname in Element, change it here too */}
      {children} &#;{/*Change the html entity(decimal) here */}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
