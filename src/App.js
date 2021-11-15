import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0
    };
  }
  handleIncrement = () => {
    return this.setState({
      counter: this.state.counter + 1
    });
  };
  handleDecrement = () => {
    return this.setState({
      counter: this.state.counter - 1
    });
  };
  handleReset = () => {
    return this.setState({
      counter: 0
    });
  };
  render() {
    console.log(this.props, this.state);
    return (
      <>
        <h1>
          {this.props.name[0].toUpperCase() + this.props.name.slice(1)}, Lets
          make counter app
        </h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Restart</button>
      </>
    );
  }
}
export default App;
