import React, { Component } from "react";

import AppHeader from "../app-header";
import SeachPanel from "../seach-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  maxIdx = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Go in for sports"),
      this.createTodoItem("Study the Bible"),
      this.createTodoItem("Feed the cat"),
      this.createTodoItem("Read book of Hemingway")
    ],
    search: "",
    filter: "all"
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: ++this.maxIdx
    };
  }
  makeDelete = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArr = [...before, ...after];
      return {
        todoData: newArr
      };
    });
  };
  makeNewItem = text => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxIdx++
    };
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  makeToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };
  makeToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };
  makeSearch = search => {
    this.setState({ search });
  };
  search(items, search) {
    if (search === 0) {
      return items;
    }
    return items.filter(elem => {
      return elem.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
  makeFilter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(elem => !elem.done);
      case "done":
        return items.filter(elem => elem.done);
      default:
        return items;
    }
  }
  render() {
    const { todoData, search, filter } = this.state;
    const visibleItems = this.makeFilter(this.search(todoData, search), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel">
          <SeachPanel makeSearchChange={this.makeSearch} />
          <ItemStatusFilter currentFilter={filter} />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.makeDelete}
          onToggleImportant={this.makeToggleImportant}
          onToggleDone={this.makeToggleDone}
        />
        <ItemAddForm onAddItem={this.makeNewItem} />
      </div>
    );
  }
}
