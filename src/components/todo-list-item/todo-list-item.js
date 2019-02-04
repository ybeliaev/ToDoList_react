import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  onLabelClick = () => {
    console.log(`${this.props.label}`);
  };
  render() {
    const { label, important } = this.props;
    let classNames = "todo-list-item";

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button className="btn">
          <i className="fa fa-exclamation" />
        </button>
        <button className="btn">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
