import React from "react";
import katex from 'katex'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import ReactDOM from 'react-dom';
import matrixElement from "../AntonioElement/index";
import matrixElement1 from "../AntonioElement/index copy 1";
import matrixElement2 from "../AntonioElement/index copy 2";
import matrixElement3 from "../AntonioElement/index copy 3";
import matrixElement4 from "../AntonioElement/index copy 4";
import matrixElement5 from "../AntonioElement/index copy 5";
import matrixElement6 from "../AntonioElement/index copy 6";
import matrixElement7 from "../AntonioElement/index copy 7";
import matrixElement8 from "../AntonioElement/index copy 8";

import Table from 'react-bootstrap/Table'
import createTable from '../AntonioTable'
import "./index.css";

const dom = () => [
  {
  type: "math",
  subtype: "matrix3x3",
  children: [matrixElement.slateDOM(), matrixElement1.slateDOM(), matrixElement2.slateDOM(), matrixElement3.slateDOM(),matrixElement4.slateDOM(),
    matrixElement5.slateDOM(),matrixElement6.slateDOM(),matrixElement7.slateDOM(),matrixElement8.slateDOM(),],
},
  {
    children: [
      {        
        text: "",
      },
      {        
        text: "",
      },
    ],
  }
];



const Element = (attributes, children) => {   
  var Latex = require('react-latex');
  
  return (
    <span {...attributes}>
      <span className = "inline" style={{ userSelect: "element" }} contentEditable={false}>  
       <Latex displayMode={false}>{`$$ \\Biggr[ $$`}</Latex>
      </span>
      
      <span className = "inline2">
      {children}
     </span>

      <span className= "inline3" style={{ userSelect: "element" }} contentEditable={false}>  
        <Latex displayMode={false}>{`$$ \\Biggr] $$`}</Latex>
      </span>
    </span>

    
  );
};

const icon = (attributes, children) => {
  var Latex = require('react-latex');
  return (
    <span {...attributes}>
      <span>  <Latex displayMode={true}>{`$$
    \\left[
    \\begin{array}{cc|c}
        \u2b1a & \u2b1a & \u2b1a \\\\
        \u2b1a & \u2b1a & \u2b1a \\\\
        \u2b1a & \u2b1a & \u2b1a \\\\
    \\end{array}
    \\right]
  $$`}</Latex></span>
      {children}
    </span>
  );};
  

export default { slateDOM: dom, MathElement: Element, Icon: icon };
