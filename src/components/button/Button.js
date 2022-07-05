import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
            alert('CLICKED!!')
        }}>
            Click Me!
        </button>
      </div>
    )
  }
}

export default Button;
