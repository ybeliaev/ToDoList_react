import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    e.target.value = this.state.label;
    this.setState({
      label: ""
    });
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };
  render() {
    const { onAddItem } = this.props;
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="input-add"
          onChange={this.onLabelChange}
          value={this.state.label}
          placeholder="What need to be done"
        />
        <button className="btn btn-add" onChange={this.onLabelChange}>
          Add item
        </button>
      </form>
    );
  }
}
