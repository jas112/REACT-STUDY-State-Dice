import React, { Component } from 'react'

class StateClicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            limit: 7,
            limitReached: false
        }

        this.incrementNumber = this.incrementNumber.bind(this);
        this.generateRandomNumber = this.generateRandomNumber.bind(this);
    }

    incrementNumber(e){
        
        let newNum = this.state.number;

        newNum += 1;

        if(newNum === this.state.limit){
            this.setState({limitReached: true});
        }

        this.setState({number: newNum});

    }

    generateRandomNumber(e){

        let randomNumber = Math.floor(Math.random() * 10) + 1;

        if(randomNumber === this.state.limit){
            this.setState({limitReached: true});
        }else{
            this.setState({limitReached: false});
        }

        this.setState({number: randomNumber});

    }

  render() {
    return (
      <div>
        {/* <h1>{this.state.limitReached ? 'Limit Reached!!!' : `Limit is ${this.state.limit}`}</h1> */}
        <h1>Number is {this.state.number}</h1>
        {/* { this.state.limitReached ? <h2>You WIN!!!</h2> : null } */}
        {/* <button onClick={this.incrementNumber}>Click Me!</button> */}
        {/* <button onClick={this.generateRandomNumber}>Click Me!</button> */}
        { this.state.limitReached ? 
            <h2>You WIN!!!</h2> 
            : 
            <button onClick={this.generateRandomNumber}>Click Me!</button>
        }
      </div>
    )
  }
}

export default StateClicker;
