import React from "react";

const denominator = () => ({
  type: "denominator",
  children: [
    {
      type: "input",
      children: [{ text: " " }]
    }
  ]
});

export default {
  slateDOM: () => {
    denominator();
  }
  //,
  //element: ()=> {
  //    <span className="denominator" {...attributes}>
  //      {children}
  //    </span>
  //}
};
