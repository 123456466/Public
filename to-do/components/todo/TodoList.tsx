"use client";

import React from "react";
import TodoItem from "./TodoItem";
import { useTodosQuery } from "@/query/useTodoQuery";

const TodoList = () => {
  const { data: todos } = useTodosQuery();

  if (!todos) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
