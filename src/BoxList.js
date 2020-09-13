import React, { Component } from "react";
import BoxForm from "./BoxForm";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.createBox = this.createBox.bind(this);
    this.remove = this.remove.bind(this);
  }

  createBox(newBox) {
    this.setState((st) => ({
      boxes: [...st.boxes, newBox],
    }));
  }

  remove(id) {
    this.setState({ boxes: this.state.boxes.filter((box) => box.id !== id) });
  }

  render() {
    let boxes = this.state.boxes.map((box) => (
      <Box
        id={box.id}
        key={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        remove={this.remove}
      />
    ));
    return (
      <div>
        <h1>Color Box Maker</h1>
        <BoxForm createBox={this.createBox} />
        <div>{boxes}</div>
      </div>
    );
  }
}

export default BoxList;
