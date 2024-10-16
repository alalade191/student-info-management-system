import { Essential } from "@/components/Home/courses-advertisement";
import { HeroSection } from "@/components/Home/hero-section";
import { AllLists } from "@/components/Home/students-card";
import React from "react";

const AllStudents = () => {
  return (
    <div>
      <HeroSection />
      <Essential />
      <AllLists />
    </div>
  );
};

export default AllStudents;
