import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operand1: 0,
      operand2: 0,
      operators: ["+", "-", "*", "/", "%"],
      selectedOperator: 0,
    };
    this.handleChangeForOperand1 = this.handleChangeForOperand1.bind(this);
    this.handleChangeForOperand2 = this.handleChangeForOperand2.bind(this);
    this.operatorSelection = this.operatorSelection.bind(this);
  }

  operatorSelection(event) {
    this.setState({ selectedOperator: event.target.value });
  }

  handleChangeForOperand1(event) {
    this.setState({
      operand1: event.target.value,
    });
  }

  handleChangeForOperand2(event) {
    this.setState({
      operand2: event.target.value,
    });
  }

  render() {
    let result;
    switch (this.state.operators[this.state.selectedOperator]) {
      case "+":
        result = Number(this.state.operand1) + Number(this.state.operand2);
        break;
      case "-":
        result = Number(this.state.operand1) - Number(this.state.operand2);
        break;
      case "*":
        result = Number(this.state.operand1) * Number(this.state.operand2);
        break;
      case "/":
        result = Number(this.state.operand1) / Number(this.state.operand2);
        break;
      case "%":
        result = Number(this.state.operand1) % Number(this.state.operand2);
        break;
    }
    return (
      <div>
        <input
          type="text"
          value={this.state.operand1}
          onChange={this.handleChangeForOperand1}
        ></input>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={this.operatorSelection}
          value={this.state.selectedOperator}
        >
          {this.state.operators.map((operator, index) => {
            return (
              <option key={index} value={index}>
                {operator}
              </option>
              // <button
              //   type="button"
              //   className={
              //     "btn btn-primary " +
              //     (this.state.selectedOperator === index ? "active" : "")
              //   }
              //   key={index}
              //   onClick={() => {
              //     this.operatorSelection(index);
              //   }}
              // >
              //   {operator}
              // </button>
            );
          })}
        </select>
        <input
          type="text"
          value={this.state.operand2}
          onChange={this.handleChangeForOperand2}
        ></input>
        <p>{`${this.state.operand1} ${
          this.state.operators[this.state.selectedOperator]
        } ${this.state.operand2} = ${result}`}</p>
      </div>
    );
  }
}

export default Calculator;
