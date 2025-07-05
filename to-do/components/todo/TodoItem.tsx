"use client";

import React from "react";
import { Todo } from "../../types/todo.type";
import { delTodo, toggleTodoCompleted } from "../../api/todo.api";
import Link from "next/link";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <article>
      <Link href={`/${todo.id}`}>{todo.title}</Link>
      <p>{todo.completed ? "완료" : "미완료"}</p>
      <div>
        <button onClick={() => toggleTodoCompleted(todo.id, !todo.completed)}>
          {todo.completed ? "취소" : "완료"}
        </button>
        <button onClick={() => delTodo(todo.id)}>삭제</button>
      </div>
    </article>
  );
}
