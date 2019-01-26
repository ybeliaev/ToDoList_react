import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({ label, important }) => {
  const style = important ? "todo-list-item important" : "todo-list-item";
  return <span className={style}>{label}</span>;
};

export default TodoListItem;
