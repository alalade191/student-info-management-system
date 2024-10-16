"use client";
import React from "react";
import { CardLayout } from "./card";
import { Button } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { studentHandle } from "../../../axios-config";
import { useRouter } from "next/navigation";
import { Skeleton } from "@chakra-ui/react";

export const AllLists = () => {
  const { push } = useRouter();
  const { data, isPending } = useQuery({
    queryFn: async () => await studentHandle.get("/api/students"),
    queryKey: ["fetch-all-student"],
  });
  console.log("All students", data?.data);
  return (
    <div className="mt-[3.438rem] px-4 md:px-8 lg:px-20">
      <section className="flex flex-col lg:space-y-10 space-y-5 ">
        <div className="flex items-center justify-between">
          <h1 className="font-normal lg:text-5xl text-lg text-black ">
            List of available students
          </h1>
          <div className="">
            <Button
              onClick={() => push("/students/new")}
              className="font-semibold cursor-pointer text-xl flex item-center text-center text-[#F6F6F6] bg-[#001A33] rounded-[10px] border border-white shadow-sm"
            >
              Create
            </Button>
          </div>
        </div>
        {isPending ? (
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 pb-10">
            <Skeleton height="200px" className="rounded-xl" />
            <Skeleton height="200px" className="rounded-xl" />
            <Skeleton height="200px" className="rounded-xl" />
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
            {data?.data?.map((students: any, idx: number) => (
              <CardLayout
                key={idx}
                image={"/main/male.png"}
                cgpa={students?.gpa}
                name={students.name}
                reg_no={students.registrationNumber}
                id={students?.id}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
