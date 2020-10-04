import React from "react";

// Stateless Functional Component
// We can use this kind of function component to add a simple component with no methods and properties, in this case we just use and props to add a function.

// Destructuring Argunments, we can remove the this.props. or props. with the next statement

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-info">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
