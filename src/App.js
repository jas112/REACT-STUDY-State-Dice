import React, {Component} from 'react';
// import Game from './components/game/Game';
// import Game2 from './components/game/Game2';
// import Button from './components/button/Button';
// import BrokenClick from './components/brokenClick/BrokenClick';
// import BrokenClick2 from './components/brokenClick/BrokenClick2';
// import Rando from './components/rando/Rando';
// import StateClicker from './components/stateClicker/StateClicker';
import RollDice from './components/rollDice/RollDice';

class App extends Component{
  render(){
    return (
        <div className="App">
            {/* <Game/> 
            <Game2/>
            <Rando maxNum={ 7 } /> */}
            {/* <Button/> */}
            {/* <BrokenClick/> */}
            {/* <BrokenClick2/> */}
            {/* <StateClicker/> */}

            <RollDice/>
        </div>
    )
  }
  
}

export default App;
