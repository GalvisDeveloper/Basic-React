

import React, { Component } from 'react';

class MyComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, onButtonClicked } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <button onclick={onButtonClicked}>Click here!</button>
            </div>
        );
    }

}

export default MyComponent;

{/* 
this.state = {
    count: 0,
  };

  this.countUp = this.countUp.bind(this);
*/ }
