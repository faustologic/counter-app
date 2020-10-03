//import { findByLabelText } from "@testing-library/react";
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      // The component that owns that piece of "state", should be the one modifing it, we delete or add a count line in this Counters component. So here on this component we have to create a method called handleDelete and pass it as a props to the Counter componente as a onDelete props.
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = () => {
    console.log("handle event called!");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            // This are the counter props
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
