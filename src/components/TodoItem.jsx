import React from "react";

function TodoItem(props) {
  const { text, completed } = props.item;

  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} />
      <p>{text}</p>
    </div>
  );
}

export default TodoItem;
