import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeletedItem,
      onImportant,
      onDone,
      done,
      important
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onDone}>
          {label}
        </span>
        <button className="btn btn-exclamation" onClick={onImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-trash" onClick={onDeletedItem}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
