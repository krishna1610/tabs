import React from "react";
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
        <div className="btn-group" role="group" aria-label="Basic example">
          {this.state.btns.map((btn, index) => {
            return (
              <button
                type="button"
                className="btn btn-primary"
                key={index}
                onClick={() => {
                  this.timerChange(btn);
                }}
              >
                {btn}
              </button>
            );
          })}
        </div>
        <p>{this.state.timer}</p>
      </div>
    );
  }
}

export default StopWatch;
