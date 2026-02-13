import React from "react";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      totalRemaining: 100,
    };
  }

  // use an arrow method so `this` is bound, and use functional setState
  clickMe = () => {
    this.setState((prev) => ({
      clicks: prev.clicks + 1,
      totalRemaining: prev.totalRemaining - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1 onClick={this.clickMe}>Hello from {this.props.name}</h1>
        <span>
          {this.state.clicks} click(s) — {this.state.totalRemaining} remaining
        </span>
      </div>
    );
  }
}

export default Items;
    