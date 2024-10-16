import { NextResponse } from "next/server";
import { addUser, getUserByEmail } from "../../../../../data/users";

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  // Check if user already exists
  const existingUser = getUserByEmail(email);
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  // Add new user with username
  await addUser(username, email, password);
  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
