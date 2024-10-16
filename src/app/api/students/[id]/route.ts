// app/api/students/[id]/route.ts
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

// Utility functions as before
const readStudentsFromFile = (): Student[] => {
  const fileContents = fs.readFileSync(studentsFilePath, "utf-8");
  return JSON.parse(fileContents);
};

const writeStudentsToFile = (students: Student[]): void => {
  fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2));
};

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const students = readStudentsFromFile();
    const student = students.find((student) => student.id === params.id);

    if (!student) {
      return NextResponse.json(
        { message: "Student not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const updatedData: Partial<Student> = await req.json();
  let students = readStudentsFromFile();

  // Update the student record with the new data
  students = students.map((student) =>
    student.id === params.id ? { ...student, ...updatedData } : student
  );

  // Write the updated students list to the file
  writeStudentsToFile(students);

  return NextResponse.json({ message: "Student updated successfully" });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  let students = readStudentsFromFile();

  // Filter out the student with the matching ID
  students = students.filter((student) => student.id !== params.id);

  // Write the updated students list to the file
  writeStudentsToFile(students);

  return NextResponse.json({ message: "Student deleted successfully" });
}
