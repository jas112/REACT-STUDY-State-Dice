import React, { Component } from 'react';

class Game2 extends Component{
    state = {
        score: 0,
        gameOver: false
    };

    render(){
        return(
            <div>
                Game 2
                <h1>Your Score Is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game2;