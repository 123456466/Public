"use server";

import { revalidateTag } from "next/cache";
import { Todo } from "../types/todo.type";

const BASE_URL = "http://localhost:3000/todos";

export const getTodos = async () => {
  const response = await fetch(BASE_URL, {
    next: {
      tags: ["todos"],
    },
  });
  const data: Todo[] = await response.json();

  return data;
};

export const getTodoItem = async (id: Todo["id"]) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    next: {
      tags: ["todos", String(id)],
    },
  });
  const data: Todo = await response.json();

  return data;
};

export const createTodo = async (title: Todo["title"]) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, completed: false }),
  });
  const data: Todo = await response.json();

  revalidateTag("/");

  return data;
};

export const delTodo = async (id: Todo["id"]) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  const data: Todo = await response.json();

  revalidateTag("/");

  return data;
};

export const toggleTodoCompleted = async (
  id: Todo["id"],
  completed: Todo["completed"]
) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
  const data: Todo = await response.json();

  revalidateTag("/");

  return data;
};
