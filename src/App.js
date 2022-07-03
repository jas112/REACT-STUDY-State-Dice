import React, {Component} from 'react';
import Game from './components/game/Game';
import Game2 from './components/game/Game2';
import Rando from './components/rando/Rando';

class App extends Component{
  render(){
    return (
        <div className="App">
            <Game/> 
            <Game2/>
            <Rando maxNum={ 7 } />
        </div>
    )
  }
  
}

export default App;
