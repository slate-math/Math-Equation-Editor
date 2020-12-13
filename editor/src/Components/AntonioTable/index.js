import React from 'react';

let rows = [
  'Setting One',
  'Setting Two',
  'Setting Three',
  'Setting Four',
];

class MyTable extends React.Component {

  createTable = () => {

    let table = []
    for (let i = 0; i < rows.length; i++) {
      let children = []
      children.push(<td>{rows[i]}</td>)
      table.push(<tr>{children}</tr>)
    }
    return table

  }

  render() {
    return(
      <table>
        {this.createTable()}
      </table>
    )
  }

}

export default MyTable;