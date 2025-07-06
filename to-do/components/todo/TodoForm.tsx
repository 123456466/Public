"use client";

import { createTodo } from "@/api/todo.api";
import React from "react";

const TodoForm = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get("todo-text") as string;

    await createTodo(todoText);

    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="mb-4 flex justify-center ">
      <input
        type="text"
        name="todo-text"
        placeholder="할 일을 입력하세요"
        className="flex mr-2 p-2 border border-gray-300 rounded w-100 "
      />
      <button
        type="submit"
        className="p-2 bg-gray-500 text-white rounded cursor-pointer"
      >
        추가
      </button>
    </form>
  );
};

export default TodoForm;
