import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <form className="item-add-form">
        <input
          type="text"
          className="input-add"
          onChange={this.onLabelChange}
          placeholder="What need to be done"
        />
        <button
          className="btn btn-add"
          onClick={() => onAddItem("Hello World")}
        >
          Add item
        </button>
      </form>
    );
  }
}
