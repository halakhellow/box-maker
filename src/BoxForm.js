import React, { Component } from "react";
import uuid from "react-uuid";

class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      color: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createBox({ ...this.state, id: uuid() });
    this.setState({ width: "", height: "", color: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width : </label>
        <input
          id="width"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="height"> Height : </label>
        <input
          id="height"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor="color"> Color : </label>
        <input
          id="color"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <button style={{ marginLeft: "1rem" }}>Create Box</button>
      </form>
    );
  }
}

export default BoxForm;
