import React from "react";

function TodoItem(props) {
  const { id, text, completed } = props.item;
  const { handleChange } = props;

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
      />
      <p>{text}</p>
    </div>
  );
}

export default TodoItem;
