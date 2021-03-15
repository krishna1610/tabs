import React from "react";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      now: new Date(),
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    // calls this function every interval
    let incrementValue = this.state.counter + 1;
    this.setState({ counter: incrementValue, now: new Date() });
  }

  componentDidMount() {
    this.timerID = setInterval(this.increment, 1000); // start timer
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // stop timer
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Click Me</button>
        <p>{this.state.counter}</p>
        <p>{this.state.now.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default CountDown;
