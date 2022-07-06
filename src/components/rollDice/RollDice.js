import React, { Component } from 'react';
import Die from '../die/Die';

class RollDice extends Component {
//   constructor(props){
//     super(props);
//     this.state = {

//     };
//   }

  render() {
    return (
      <div>
        <h1>Roll Dice</h1>
        <Die/>
        <Die/>
      </div>
    )
  }
}

export default RollDice;