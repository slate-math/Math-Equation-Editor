
import { render } from 'katex'
import React from 'react'

export default class myTable extends React.Component{

createTable = () => {
    let table = []
    // Outer loop to create rows
    for( let i = 0; i < 3; i++){
      let children = []
      // inner loop to create children
      for(let j = 0; j < 5; j++){
      children.push(<td>{`Column ${j + 1}`}</td>)
      }
      // create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return (table)
     }
  

 
  

}