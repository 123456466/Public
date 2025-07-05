"use client";

import React from "react";
import { Todo } from "../../types/todo.type";
import { delTodo, toggleTodoCompleted } from "../../api/todo.api";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.completed ? "완료" : "미완료"}</p>
      <div>
        <button onClick={() => toggleTodoCompleted(todo.id, !todo.completed)}>
          완료
        </button>
        <button onClick={() => delTodo(todo.id)}>삭제</button>
      </div>
    </div>
  );
}
