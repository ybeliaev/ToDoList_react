import React, { Component } from "react";

import AppHeader from "../app-header";
import SeachPanel from "../seach-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import "./app.css";

export default class App extends Component {
  state = {
    tododata: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Go in for sports", important: false, id: 2 },
      { label: "Study Bible", important: true, id: 3 },
      { label: "Feed the cat", important: false, id: 4 }
    ]
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel">
          <SeachPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.tododata} onDeletedItem={this.makeDelete} />
      </div>
    );
  }
}

App;
