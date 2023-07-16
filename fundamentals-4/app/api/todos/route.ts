import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.BASE_URL!}/todos`);
  const todos: Todo[] = await response.json();

  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const { userId, title }: Partial<Todo> = await req.json();
  if (!userId || !title) {
    return NextResponse.json({ message: "Missing the required data" });
  }
  const response = await fetch(`${process.env.BASE_URL as string}/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.SECRET_API_KEY as string,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo: Todo = await response.json();
  return NextResponse.json(newTodo);
}

export async function PUT(req: Request) {
  const { userId, id, completed, title }: Todo = await req.json();

  if (!userId || !title || !id || typeof completed !== "boolean") {
    return NextResponse.json({ message: "Missing the required data" });
  }
  const response = await fetch(
    `${process.env.BASE_URL as string}/todos/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.SECRET_API_KEY as string,
      },
      body: JSON.stringify({
        userId,
        title,
        completed,
      }),
    }
  );

  const updatedTodo: Todo = await response.json();
  return NextResponse.json(updatedTodo);
}

export async function DELETE(req: Request) {
  const { id }: Partial<Todo> = await req.json();
  if (!id) {
    return NextResponse.json({ message: "Todo id is required" });
  }
  const response = await fetch(
    `${process.env.BASE_URL as string}/todos/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.SECRET_API_KEY as string,
      },
    }
  );

  return NextResponse.json({
    message: `Todo with the id ${id} is now deleted `,
  });
}
