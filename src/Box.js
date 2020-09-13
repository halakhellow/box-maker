import React, { Component } from "react";

class Box extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.remove(this.props.id);
  }
  render() {
    let style = {
      width: `${this.props.width}rem`,
      height: `${this.props.height}rem`,
      backgroundColor: this.props.color,
      margin: "1rem auto",
    };
    return (
      <div>
        <div style={style}></div>
        <button onClick={this.handleClick}>Remove Box</button>
      </div>
    );
  }
}

export default Box;
