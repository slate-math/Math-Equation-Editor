import React from "react";
import matrixElement from "../AntonioElement";


export default function Table(props) {
  return <table {...props} />;
}

Table.TH = function TH(props) {
  return <th {...props} />;
};

Table.TR = function TR(props) {
  return <tr {...props} />;
};

Table.TD = function TD(props) {
  return <td {...props} />;
};

function App(children) {
  const data = [
    {
      Name: "Antonio",
      Age: "20"
    }
  ];
  return (
    <div>
      <Table data={data}/>
    </div>
  );
}
