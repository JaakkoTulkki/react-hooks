import React from "react"

export class ClassBasedCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  decrement() {
    this.setState({count: this.state.count - 1});
  }

  reset() {
    this.setState({count: 0});
  }

  render() {
    return (
      <>
        <button onClick={this.decrement}>-</button>
        {this.state.count}
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>Reset</button>
      </>
    )
  }
}