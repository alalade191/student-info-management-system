import { NextResponse } from "next/server";
import { getUserByEmail } from "../../../../../data/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}
export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = getUserByEmail(email);

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Compare the password with the hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Create a JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    JWT_SECRET,

    { expiresIn: "1h" }
  );

  return NextResponse.json({ token, username: user.username }, { status: 200 });
}
