import React, { Component } from 'react';
import Die from '../die/Die';
import './RollDice.css';

class RollDice extends Component {

static defaultProps = {
  faces: ["one", "two", "three", "four", "five", "six"],
  faceValues: {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6}
};

constructor(props){
    super(props);
    this.state = {
        die1: "one",
        die2: "one",
        isRolling: false,
        isWinner: false
    };
    this.rollDice = this.rollDice.bind(this);
}


generateRandomFaceValue(){
    const randomFaceValue = this.props.faces[Math.floor(Math.random()*this.props.faces.length)];
    return randomFaceValue;
}

rollDice(e){

    this.setState({isWinner: false})

    const d1 = this.generateRandomFaceValue();
    const d2 = this.generateRandomFaceValue();
    const dieTotal = this.props.faceValues[d1] + this.props.faceValues[d2];
    const winnerBool = dieTotal == 7;
    console.log(`${d1} ${d2} ${dieTotal} ${winnerBool}`);
    console.log(`${this.props.faceValues[d1]} ${this.props.faceValues[d2]}`);
    // const winnerBool = (this.props.faceValues[d1] + this.props.faceValues[d2]) === 7;
    // const winnerBool = false;
    // this.setState({die1: d1});
    // this.setState({die2: d2});
    // this.setState({isRolling: true});
    this.setState({die1: d1, die2: d2, isRolling: true, isWinner: winnerBool});

    setTimeout(() => {
        this.setState({isRolling: false});
    }, 1000);
}

  render() {
    return (
      <div className='RollDice'>
        <h1>{this.state.isWinner ? "You Win!!!" : "Let's Roll"}</h1>
        <div className='RollDice-container'>
            <Die face={this.state.die1} isRolling={this.state.isRolling}/>
            <Die face={this.state.die2} isRolling={this.state.isRolling}/>
        </div>
        <button onClick={this.rollDice} disabled={this.state.isRolling}>
            {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}

export default RollDice;