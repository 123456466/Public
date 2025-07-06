"use client";

import { useTodoItemQuery } from "@/query/useTodoQuery";
import TodoItem from "./TodoItem";

interface TodoDetailProps {
  id: number;
}

const TodoDetail = ({ id }: TodoDetailProps) => {
  const { data: todo } = useTodoItemQuery(id);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoDetail;
