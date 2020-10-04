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

  handleDelete = (counterId) => {
    //console.log("handle event called!", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    // console.log("Reset the counters");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            // This are the counter props
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter} // we simplify this props and use it as a prefix on counter component
          />
        ))}
      </div>
    );
  }
}

export default Counters;
