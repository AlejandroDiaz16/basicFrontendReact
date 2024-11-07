import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos = [] }) {
  console.log("data here", todos);
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
