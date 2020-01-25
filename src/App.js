import React, { Component } from "react";
var book = require("./tree.png");

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>This Page</h1>;
        <img src={book} />
        <button>Test</button>
        <textarea>test</textarea>
      </React.Fragment>
    );
  }
}

export default App;
