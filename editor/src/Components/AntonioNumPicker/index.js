import React, {Component, Fragment} from 'react';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import { NumberPicker } from 'react-widgets';
import "react-number-picker/dist/style.css"
simpleNumberLocalizer();


class NumberPickerContainer extends Component{
  render(){
    return(
      <Fragment>
        <NumberPicker/>
      </Fragment>
    )
  }
}

export default NumberPickerContainer;