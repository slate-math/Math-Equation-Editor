import React from "react";
import numerator from "../Numerator";
import denominator from "../Denominator";

export default {
  element: () => {
    return <span className="fraction"></span>;
  } ,
  dom: () => {
    return this.slateDOM;
  } 
};
