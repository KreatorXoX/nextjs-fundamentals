import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  //   const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  // we can get the id without providing {params} like this.

  const todoId = params.id;

  const response = await fetch(`${process.env.BASE_URL!}/todos/${todoId}`);
  const todo: Todo = await response.json();

  if (!todo.id) {
    return NextResponse.json({ message: "Todo not Found" });
  }

  return NextResponse.json(todo);
}
