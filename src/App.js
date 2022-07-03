import React, {Component} from 'react';
import Game from './components/game/Game';
import Game2 from './components/game/Game2';

class App extends Component{
  render(){
    return (
        <div className="App">
            <Game/> 
            <Game2/>
        </div>
    )
  }
  
}

export default App;
