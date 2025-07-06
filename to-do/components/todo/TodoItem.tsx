"use client";

import React from "react";
import { Todo } from "../../types/todo.type";
import { toggleTodoCompleted } from "../../api/todo.api";
import Link from "next/link";
import { useDeleteTodoMutation } from "@/query/useTodoMutation";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { mutate: deleteTodo } = useDeleteTodoMutation();

  return (
    <article className="text-center border border-gray-300 rounded max-w-300 flex justify-end items-center p-5 m-auto mb-5">
      <Link
        href={`/${todo.id}`}
        className={
          "cursor-default mx-auto" +
          (todo.completed ? " line-through text-gray-500" : "")
        }
      >
        {todo.title}
      </Link>
      <div className="flex justify-end">
        <button
          onClick={() => toggleTodoCompleted(todo.id, !todo.completed)}
          className={
            todo.completed
              ? "bg-red-400 text-white p-2 rounded cursor-pointer"
              : "bg-blue-400 text-white p-2 rounded cursor-pointer"
          }
        >
          {todo.completed ? "취소" : "완료"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-gray-500 text-white p-2 rounded mx-4 cursor-pointer"
        >
          삭제
        </button>
      </div>
    </article>
  );
}
