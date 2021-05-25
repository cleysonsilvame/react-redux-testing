import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: null,
    };
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.error && (
          <p data-test="error-decrement">{this.state.error}</p>
        )}
        <button
          data-test="increment-button"
          onClick={() => {
            this.setState({ counter: this.state.counter + 1, error: null });
          }}
        >
          Increment Counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            if (this.state.counter > 0) {              
              this.setState({ counter: this.state.counter - 1, error: null });
            }else{
              this.setState({ error: "The counter can't go below zero"});
            }
          }}
        >
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
