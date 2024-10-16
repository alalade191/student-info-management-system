import React from "react";
import { OneTimeCourse } from "./one-time-course";

export const Essential = () => {
  return (
    <div className=" bg-[#001A33] flex flex-col space-y-20 lg:pt-28 lg:pb-12 pt-6">
      <div className="flex flex-col space-y-5 items-center justify-center">
        <p className="font-normal lg:text-base text-xs text-[#F6F6F6]">
          Essentials
        </p>
        <h3 className="font-semibold lg:text-5xl text-2xl text-[#F6F6F6]">
          For Everyday Use
        </h3>
      </div>
      <div className="flex flex-col">
        <OneTimeCourse />
      </div>
    </div>
  );
};
