import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const { label, important } = this.props;
    const style = important ? "todo-list-item important" : "todo-list-item";
    return (
      <span>
        <span className={style}>{label}</span>
        <button>
          <i className="fa fa-exclamation" />
        </button>
        <button>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
