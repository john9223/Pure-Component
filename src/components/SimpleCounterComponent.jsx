import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  state = {
    counter: 0,
    toggle: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({ toggle: !prevState.toggle }));
  };

  incrementCounter = () => {
    if (this.state.toggle) {
      this.setState(prevState => ({ counter: prevState.counter + 1 }));
    }
  };

  render() {
    return (
      <div>
        <h2>Simple Counter</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Counter</button>
        <button onClick={this.handleToggle}>Set toggle</button>
        <p>Toggle: {this.state.toggle.toString()}</p>
      </div>
    );
  }
}

export default SimpleCounterComponent;
