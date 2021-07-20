import React from "react";

function TodoItem({ todo, handleChange }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <p className={todo.completed ? "todo-text" : null}>{todo.text}</p>
    </div>
  );
}

export default TodoItem;
