//import { findByLabelText } from "@testing-library/react";
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // Let's add a destructuring argument, to clean our code.
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            // This are the counter props
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter} // we simplify this props and use it as a prefix on counter component
          />
        ))}
      </div>
    );
  }
}

export default Counters;
