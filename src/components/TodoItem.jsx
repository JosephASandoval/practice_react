import React from "react";

function TodoItem(props) {
  const { id, text, completed } = props.todo;

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(id)}
      />
      <p>{text}</p>
    </div>
  );
}

export default TodoItem;
