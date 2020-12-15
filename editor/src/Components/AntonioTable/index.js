import React, { Fragment, useState, useRef, useEffect } from "react";
// Material-ui imports
import {  withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import matrixElement from "../AntonioElement";


const useStyles = makeStyles({
  table: {
    maxWidth: 650

  }
});
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
 
  }
}))(InputBase);

export default function MatrixTable(props) {
  const classes = useStyles();
  const [rowValue, setRowValue] = useState(0);
  const [columnsValue, setColumnsValue] = useState(0);
  const [tableCellsData, setTableCellsData] = useState();
  const [tableArrayData] = useState([[]]);
  const [tableDictData] = useState([{}]);

  const ref = useRef(null);

  const getUniqueKeyFromArrayIndex = (rowNum, columnNum) => {
    return `${rowNum}-${columnNum}`;
  };

  const onChangeHandler = (e) => {
    setTableCellsData({
      ...tableCellsData,
      [e.target.name]: e.target.value
    });
    let [row, col] = e.target.name.split("-");
    row = parseInt(row, 10);
    col = parseInt(col, 10);

    if (!tableArrayData[row]) {
      tableArrayData[row] = [];
      tableArrayData[row].push([]);
    }

    tableArrayData[row][col] = e.target.value;
  };

  useEffect(() => {
    console.log(tableDictData);
  }, [tableCellsData]);

  const generateTable = () => {
    let table = [];
    // Outer loop to create parent
    let rowVariable = 1;
    rowVariable = rowValue + rowVariable;
    // console.log(rowVariable)
    for (let i = 0; i < rowVariable; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < columnsValue; j++) {
        children.push(
          <td>
            {rowVariable === 1 ? (
              <BootstrapInput
                placeholder="&#x2B1A;"
                name={getUniqueKeyFromArrayIndex(i, j)}
                onChange={onChangeHandler}
              />
            ) : (
              <BootstrapInput
                placeholder="&#x2B1A;"
                name={getUniqueKeyFromArrayIndex(i, j)}
                onChange={onChangeHandler}
              />
            )}
          </td>
        );
      }
      table.push(
        <TableRow key={i}>
          <TableCell>{children}</TableCell>
        </TableRow>
      );
    }
    return table;
  };

  return (
    <Fragment>
      <div>
        <h5>Select Row number and Columns number</h5>
        <div className={"rowColumnsNumber"} style={{ marginTop: 20 }}>
          <TextField
            id="Row-number"
            label="Row(s)"
            type="number"
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: "0", max: "1000", step: "1" }}
            onChange={(e) => setRowValue(parseInt(e.target.value, 10))}
            variant="outlined"
          />
          <TextField
            id="Columns-number"
            label="Columns(s)"
            type="number"
            inputProps={{ min: "0", max: "1000", step: "1" }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setColumnsValue(parseInt(e.target.value, 10))}
            variant="outlined"
          />
        </div>
        <br />
        <div >
            <Table >
              <TableBody className= "matrix-group" ref={ref}>{generateTable()}</TableBody>
            </Table>
        </div>
      </div>
    </Fragment>
  );
}