import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    // to avoid that "this" is gets undefined we have to use a constructor method.
    // also, using constructor method is annoying and the new ESX6 syntax recommend to use the arrow functions.
    // it's recommend to use arrow function, always that we want to use functions on events like onClick.
    // to increment the state of our property on the state object we use the setState() method, we put the object property inside.
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      // With Reac.Frangement, we can avoid the other div tag on the Body
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //We modified the statement to use an arrow function, and add a property object with an id.
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  // Let`s add an method to the value of the state object
  formatCount() {
    // To simplify this statement lets use object desctructing
    // Then we render it this method.
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    // We create this method using refractor function on visual code crt+shift+R
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
