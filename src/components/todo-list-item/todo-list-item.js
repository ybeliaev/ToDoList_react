import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false
  };
  onLabelClick = () => {
    this.setState({
      done: true
    });
  };
  onMarkImportant = () => {
    this.setState({
      important: true
    });
  };
  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button className="btn" onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button className="btn">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
