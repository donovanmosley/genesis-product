import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button onClick={() => alert('Hi!')}>Button</button>
      </React.Fragment>
    );
  }
}

export default Button;
