import React from "react";

class StopWatchBtn extends React.Component {
  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        {this.props.btns.map((btn, index) => {
          return (
            <button
              type="button"
              className="btn btn-primary"
              key={index}
              onClick={() => {
                this.props.timerChange(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>
    );
  }
}

export default StopWatchBtn;
