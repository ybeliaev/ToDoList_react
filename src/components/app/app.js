import React from "react";

import AppHeader from "../app-header";
import SeachPanel from "../seach-panel";
import TodoList from "../todo-list";

import "./app.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <SeachPanel />
      <TodoList />
    </div>
  );
}

export default App;
