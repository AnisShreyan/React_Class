import React, { Component } from "react";

export class Practice extends Component {
  //   state = { num: 0 };

  constructor() {
    super();
    this.state = { num: 0 };
    this.incNum = this.incNum.bind(this);
    this.decNum = this.decNum.bind(this);
  }

  incNum() {
    this.setState((prevState) => {
      return { num: prevState.num + 1 };
    });
    // this.setState((prevState) => {return(prevState+1)});
  }

  decNum() {
    this.setState((prevState) => {
      return { num: prevState.num - 1 };
    });
    // this.setState((prevState) => {return(prevState - 1)});
  }

  render() {
    return (
      <>
        <h1>{this.state.num}</h1>
        <button className="btn p" onClick={this.incNum}>
          +
        </button>
        <button className="btn n" onClick={this.decNum}>
          —
        </button>
      </>
    );
  }
}

export default Practice;
