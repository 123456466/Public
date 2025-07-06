import TodoDetail from "@/components/todo/TodoDetail";
import Link from "next/link";
import React from "react";

interface DetailPageProps {
  params: Promise<{ id: number }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;

  return (
    <section>
      <TodoDetail id={id} />
      <Link
        href="/"
        className="p-2 bg-gray-500 text-white rounded cursor-pointer mx-auto block w-20 text-center m-5"
      >
        돌아가기
      </Link>
    </section>
  );
};

export default DetailPage;
