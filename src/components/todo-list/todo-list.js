import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <TodoListItem
          {...itemProps}
          onDeletedItem={() => onDeleted(id)}
          onImportant={() => onToggleImportant(id)}
          onDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
