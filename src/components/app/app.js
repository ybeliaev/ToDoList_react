import React from "react";

import AppHeader from "../app-header";
import SeachPanel from "../seach-panel";
import TodoList from "../todo-list";

import "./app.css";

function App() {
  const tododata = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Go in for sports", important: false, id: 2 },
    { label: "Study Bible", important: false, id: 3 }
  ];
  return (
    <div className="App">
      <AppHeader />
      <SeachPanel />
      <TodoList todos={tododata} />
    </div>
  );
}

export default App;
