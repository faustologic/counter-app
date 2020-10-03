import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    // to avoid that "this" is gets undefined we have to use a constructor method.
    // also, using constructor method is annoying and the new ESX6 syntax recommend to use the arrow functions.
    // it's recommend to use arrow function, always that we want to use functions on events like onClick.
    // to increment the state of our property on the state object we use the setState() method, we put the object property inside.
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const counterStyle = {
      display: "flex",
      margin: "5px",
      padding: "5px",
    };

    return (
      // With Reac.Frangement, we can avoid the other div tag on the Body
      <div style={counterStyle}>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //We modified the statement to use an arrow function, and add a property object with an id.
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete} // This is how we called a props method from a parent to a child
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // Let`s add an method to the value of the state object
  formatValue() {
    // To simplify this statement lets use object desctructing
    // Then we render it this method.
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    // We create this method using refractor function on visual code crt+shift+R
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
