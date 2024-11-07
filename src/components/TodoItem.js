import React from "react";

function TodoItem({ todo }) {
  console.log("item here", todo);
  return (
    <div>
      <li>
        {todo.title} {todo.completed ? "Done" : "Pending"}
      </li>
    </div>
  );
}

export default TodoItem;
