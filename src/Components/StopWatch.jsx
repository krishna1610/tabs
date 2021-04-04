import React from "react";
import StopWatchBtn from "./StopWatchBtn";
import StopWatchTimer from "./StopWatchTimer";
// 3 buttons -- start button, stop button, reset button
// start timer when user clicks start button
// stop timer when user clicks stop button
// reset button stops the timer and also resets the counter value to 0
// counter = 0, start ->>> after 5 secons --> counter = 5, stop -->>> counter = 5, start -->
// counter = 0, start ->>> after 5 secons --> counter = 5, reset -->>> counter = 0, start -->

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btns: ["Start", "Stop", "Reset"],
      timer: 0,
    };
    this.increment = this.increment.bind(this);
    this.timerReset = this.timerReset.bind(this);
    this.timerChange = this.timerChange.bind(this);
  }

  increment() {
    // calls this function every interval
    let incrementTimer = this.state.timer + 1;
    this.setState({ timer: incrementTimer });
  }

  timerReset() {
    this.setState({ timer: 0 });
  }

  timerChange(btnName) {
    if (btnName === "Start") {
      this.timerID = setInterval(this.increment, 1000);
    } else if (btnName === "Stop") {
      clearInterval(this.timerID);
    } else {
      clearInterval(this.timerID);
      this.timerReset();
    }
  }
  render() {
    return (
      <div>
        <StopWatchBtn btns={this.state.btns} timerChange={this.timerChange} />
        <StopWatchTimer timer={this.state.timer} />
      </div>
    );
  }
}

export default StopWatch;
