import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
    this.reset = this.reset.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  countDown() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  reset() {
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.countUp} > Add here! </button>
        <button onClick={this.reset} > Reset here! </button>
        <button onClick={this.countDown} > Substract here! </button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
