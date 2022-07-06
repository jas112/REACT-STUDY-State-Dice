import React, { Component } from 'react';
import Die from '../die/Die';
import './RollDice.css';

class RollDice extends Component {

static defaultProps = {faces: ["one", "two", "three", "four", "five", "six"]};

constructor(props){
    super(props);
    this.state = {
        die1: "one",
        die2: "one",
        isRolling: false
    };
    this.rollDice = this.rollDice.bind(this);
}


generateRandomFaceValue(){
    const randomFaceValue = this.props.faces[Math.floor(Math.random()*this.props.faces.length)];
    return randomFaceValue;
}

rollDice(e){
    let d1 = this.generateRandomFaceValue();
    let d2 = this.generateRandomFaceValue();
    this.setState({die1: d1});
    this.setState({die2: d2});
    this.setState({isRolling: true});
    setInterval(() => {
        this.setState({isRolling: false});
    }, 2000);
}

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
            <Die face={this.state.die1} isRolling={this.state.isRolling}/>
            <Die face={this.state.die2} isRolling={this.state.isRolling}/>
        </div>
        <button onClick={this.rollDice}>{this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}</button>
      </div>
    )
  }
}

export default RollDice;