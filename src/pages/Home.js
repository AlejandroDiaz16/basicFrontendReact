import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import React, { useEffect, useState } from "react";
import api from "../api";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const resp = await api("/todos", { method: "GET" });
      if (resp.error || !resp.data) {
        console.log("Error fetching data");
      } else {
        const data = resp.data;
        setTodos(data);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    const resp = await api("/todos", { method: "POST", body: newTodo });
    if (resp.error) {
      console.log("there was an error saving the element");
    } else {
      console.log("element saved successfully");
    }
  };

  return (
    <div>
      <h1>Todo list</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Home;
