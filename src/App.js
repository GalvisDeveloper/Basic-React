import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }


  onClickBtn() {
    console.log("Button has clicked succesfully!");
  }

  render() {
    return (
      <div className="App">
        <MyComponent title="React-App" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

export default App;
