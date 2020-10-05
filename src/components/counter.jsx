import React, { Component } from "react";

class Counter extends Component {
  render() {
    const counterStyle = {
      display: "flex",
      margin: "5px",
      padding: "5px",
    };
    return (
      // With Reac.Frangement, we can avoid the other div tag on the Body
      <div style={counterStyle} className="container">
        <div className="row">
          <div className="col-sm">
            <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              // We change the method statement to make all modifications on the parent component "Counters"
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0}
              className="btn btn-secondary btn-sm m2"
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)} // This is how we called a props method from a parent to a child
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Let`s add an method to the value of the state object
  formatValue() {
    // To simplify this statement lets use object desctructing
    // Then we render it this method.
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    // We create this method using refractor function on visual code crt+shift+R
    let classes = "badge m-2 p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
