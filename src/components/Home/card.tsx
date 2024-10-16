"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProgressBar from "../ReuseableUi/progress-bar";
import { Button } from "@chakra-ui/react";
export const CardLayout: React.FC<{
  image: string;
  cgpa: string;
  name: string;
  reg_no: string;
  id: string;
}> = ({ image, cgpa, reg_no, name, id }) => {
  const { push } = useRouter();

  return (
    <div className="p-3">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-2">
          <div
            onClick={() => push(`/students/${id}`)}
            className="relative cursor-pointer"
          >
            <Image
              width={100}
              height={100}
              src={image}
              alt="user"
              className="h-[300px] w-full"
            />
            <div className="px-3 py-4 rounded-3xl text-white text-lg font-medium bg-black absolute left-4 bottom-4">
              {reg_no}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="max-w-[24.063rem] font-bold text-2xl text-chromaphobicblack">
              {name}
            </p>
            <Button
              onClick={() => push(`/students/${id}/edit`)}
              className="font-semibold cursor-pointer text-xl flex item-center text-center text-[#F6F6F6] bg-[#001A33] rounded-[10px] border border-white shadow-sm"
            >
              Edit
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <ProgressBar value={cgpa} />
        </div>
      </div>
    </div>
  );
};
