import React, { Component } from "react";

class EventDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    // bind this keyword for normal functions
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  sayHello() {
    console.log("Hello! This is a static message");
  }

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  welcomeMsg(message) {
    alert("Say Welcome : " + message);
  }

  syntheticEventExample(event) {
    alert("I was clicked");
    console.log(event); // SyntheticEvent object
  }

  render() {
    return (
      <div>
        <h1>Event Handling Example</h1>
        <h2>Counter: {this.state.counter}</h2>

        {/* Increment should call two methods */}
        <button onClick={() => { this.increment(); this.sayHello(); }}>
          Increment
        </button>

        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        {/* Say Welcome button with argument */}
        <button onClick={() => this.welcomeMsg("welcome")}>
          Say Welcome
        </button>

        <br /><br />

        {/* Synthetic Event */}
        <button onClick={(event) => this.syntheticEventExample(event)}>
          Synthetic Event Button
        </button>
      </div>
    );
  }
}

export default EventDemo;
