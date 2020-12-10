import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 0,
      column: 0,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let column = this.state.column;
    let row = this.state.row;
    if (!Number(column) || (Number(column) < 0) ) {
      alert("Your column must be a number greater than 0");
    }
    if (!Number(row) || (Number(row) < 0)) {
        alert("Your row must be a number greater than 0");
      }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h4>Create a new {this.state.row} x {this.state.column} matrix</h4>
      <p>Enter your number of Rows:</p>
      <input
        type='text'
        name='row'
        onChange={this.myChangeHandler}
      />
      <p>Enter your number of Columns:</p>
      <input
        type='text'
        name='column'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

  
  export default MyForm;