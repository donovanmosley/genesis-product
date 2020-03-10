import React, { Component } from "react";


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    fetch("http://localhost:8080/demo/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "name=value1&email=value2"
    })
      .then(function() {
        console.log("ok");
      })
      .catch(function() {
        console.log("error");
      });
    
    
    
//     fetch("http://localhost:8080/demo/add",{
//       method: "POST",
//       body: "name=value1&email=value2",
//       headers: {
//         'Content-Type': "application/x-www-form-urlencoded"
//       },
//     }) .then(function() {
//       console.log("ok");
//     })
//     .catch(function(){
//       console.log("error");
//     });
// //Make a post using fetch with our end point
//Attach it to fields
//Gather business requirements

    // .then(response => response.json())
    // .then(parsedJSON => console.log(parsedJSON.results))
    // .catch(error => console.log('parsing failed', error))
    // fetch(
    //   "http://localhost:8080/demo/add?name=First&email=" + this.state.value,
    //   { method: "post" }
    // );
    event.preventDefault();
  }

  // componentDidMount() {
  //   fetch('https://localhost:8080/demo/all')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {/* //* <button onClick={() => alert('Hi!')}> */}
        {/* </button> */}
      </React.Fragment>
    );
  }
}

export default Button;
