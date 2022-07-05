import React,{ Component } from 'react';

class BrokenClick2 extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {clicked: false,};
    //     this.handleClick = this.handleClick.bind(this);
    // }

    state = {clicked: false};

    // handleClick(e){
    //     if(this.state.clicked){
    //         this.setState({ clicked: false });
    //     }else{
    //         this.setState({ clicked: true });
    //     }
    // }

    handleClick = (e) => {
        if(this.state.clicked){
            this.setState({ clicked: false });
        }else{
            this.setState({ clicked: true });
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
                {/* <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1> */}
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

export default BrokenClick2;