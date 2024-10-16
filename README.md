STUDENT INFORMATION MANAGEMENT SYSTEM
A simple Student Information Management System built with Next.js. The system allows users to view, add, edit, and delete student records. It also implements authentication functionality for user sign-up and sign-in.

TABLE OF CONTENTS
Features
Tech Stack
Installation
Running the Project
Development Approach
API Endpoints
Authentication
Student CRUD Operations
Project Structure

FEATURES
View all student records with details like name, registration number, major, date of birth, and GPA.
Add, edit, and delete student records.
Sign-up and sign-in functionality.
User authentication using JWT tokens.
API routes using Next.js for server-side operations.

TECH STACK
Next.js (App Router)
TypeScript
React Query for handling asynchronous data fetching and mutations.
JWT for user authentication.
LocalStorage for USER storage.
Mock JSON-based database for CRUD operations.

INSTALLATION
Clone the Repository:git clone https://github.com/alalade191/student-info-management-system.git
Navigate to the Project Directory: cd miva
Install Dependencies: npm install

Set up Environment Variables

Create a .env.local file in the root of your project and add the following: JWT_SECRET=miva_secret_key

Run the Development Server: npm run dev

# student-info-management-system
