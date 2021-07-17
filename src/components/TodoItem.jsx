import React from "react";

function TodoItem(props) {
  const { text, completed } = props.item;

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => console.log("clicked")}
      />
      <p>{text}</p>
    </div>
  );
}

export default TodoItem;
