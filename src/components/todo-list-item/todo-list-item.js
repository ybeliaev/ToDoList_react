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
  render() {
    const { label, important } = this.props;
    const { done } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
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
