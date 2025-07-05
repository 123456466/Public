"use client";

import React from "react";
import { Todo } from "../../types/todo.type";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.completed ? "완료" : "미완료"}</p>
      <div>
        <button>완료</button>
        <button>삭제</button>
      </div>
    </div>
  );
}
