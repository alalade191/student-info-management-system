import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

const usersFilePath = path.join(process.cwd(), "data", "users.json");

export interface User {
  id: string;
  email: string;
  username: string;
  password: string; // This will be a hashed password
}

// Utility functions for reading and writing users
const readUsersFromFile = (): User[] => {
  const fileContents = fs.readFileSync(usersFilePath, "utf-8");
  return JSON.parse(fileContents);
};

const writeUsersToFile = (users: User[]): void => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

export const getUserByEmail = (email: string): User | undefined => {
  const users = readUsersFromFile();
  return users.find((user) => user.email === email);
};

export const addUser = async (
  username: string,
  email: string,
  password: string
): Promise<void> => {
  const users = readUsersFromFile();
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  const newUser: User = {
    id: String(users.length + 1),
    username, // Store the username
    email,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsersToFile(users);
};
