import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";

export default function HomePage() {
  return (
    <section>
      <div className="container mx-auto mt-5 ">
        <div className="text-center text-2xl font-bold my-10">Todo List</div>
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
}
