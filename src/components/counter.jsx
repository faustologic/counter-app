import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // With Reac.Frangement, we can avoid the other div tag on the Body
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
