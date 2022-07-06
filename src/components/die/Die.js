import React, { Component } from 'react';
import './Die.css';

 class Die extends Component {

  render() {

    let dieDetails = `Die fas fa-dice-${this.props.face} ${this.props.isRolling ? 'Die-rolling' : ''}`;

    return (
      <i className={dieDetails}></i>
    )
  }
}

export default  Die;