// app/api/students/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface Student {
  id: string;
  name: string;
  registrationNumber: string;
  major: string;
  dob: string;
  gpa: string;
}

// Path to the students.json file
const studentsFilePath = path.join(process.cwd(), "data", "students.json");

// Utility to read students from the JSON file
const readStudentsFromFile = (): Student[] => {
  const fileContents = fs.readFileSync(studentsFilePath, "utf-8");
  return JSON.parse(fileContents);
};

// Utility to write students to the JSON file
const writeStudentsToFile = (students: Student[]): void => {
  fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2));
};

export async function GET() {
  const students = readStudentsFromFile();
  return NextResponse.json(students);
}

export async function POST(req: Request) {
  const newStudent: Omit<Student, "id"> = await req.json();

  // Read existing students
  const students = readStudentsFromFile();

  // Add new student with a new ID
  const newStudentWithId: Student = {
    id: String(students.length + 1),
    ...newStudent,
  };
  students.push(newStudentWithId);

  // Write updated students list to file
  writeStudentsToFile(students);

  return NextResponse.json(
    { message: "Student added successfully" },
    { status: 201 }
  );
}
