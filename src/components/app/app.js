import React from "react";

import AppHeader from "../app-header";
import SeachPanel from "../seach-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import "./app.css";

function App() {
  const tododata = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Go in for sports", important: false, id: 2 },
    { label: "Study Bible", important: true, id: 3 },
    { label: "Feed the cat", important: false, id: 4 }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div>
        <SeachPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={tododata} />
    </div>
  );
}

export default App;
