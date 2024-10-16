"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { studentHandle } from "../../../../../axios-config";
import { useParams } from "next/navigation";
import { CiUser } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { ErrorType, handleError } from "@/lib/handle-error";

const StudentSinglePage = () => {
  const { id } = useParams();
  const { push } = useRouter();
  console.log("params", id);
  const { data } = useQuery({
    queryFn: async () => await studentHandle.get(`/api/students/${id}`),
    queryKey: ["fetch-single-student"],
  });
  console.log("singlle students", data?.data);

  // delete student
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await studentHandle.delete(`/api/students/${id}`);
    },
    mutationKey: ["delete"],

    onSuccess() {
      toast.success("Yuppy! profile has been deleted");
      push("/students");
      console.log("STUDENT DELETED SUCCEEFULLY");
    },
    onError(error) {
      handleError(error as ErrorType);
      console.log(error);
    },
  });

  return (
    <div className="px-4 md:px-8 lg:px-20 py-9">
      <ToastContainer />

      <div className="flex flex-col space-y-14 flex-1">
        <div className="flex items-start space-x-10">
          <figure className="lg:w-1/3 w-full">
            <Image
              width={100}
              height={100}
              src="/main/male.png"
              alt="user"
              objectFit="contain"
              className=" w-full object-contain"
            />
          </figure>
          <Button
            onClick={() => mutate()}
            className="font-semibold cursor-pointer text-xl flex item-center text-center text-[#F6F6F6] bg-[#001A33] rounded-[10px] border border-white shadow-sm"
          >
            {isPending ? <FaSpinner className="animate-spin" /> : "Delete"}
          </Button>
        </div>
        {/* intro */}
        <section className="flex flex-col space-y-5">
          <div>
            <h3 className="font-normal text-2xl text-chromaphobicblack">
              Updates
            </h3>
            <div className="font-normal text-lg text-kettleman">
              <span className="font-semibold text-lg text-chromaphobicblack pr-2">
                Today
              </span>
              {`by ${data?.data?.name}`}
            </div>
          </div>
          <div className="">
            <p className="max-w-[41.125rem] font-normal text-lg text-black items-center">
              {`${data?.data?.name} is a dedicated undergraduate currently pursuing a degree in ${data?.data?.major}. With a strong academic record, they demonstrate a passion for learning and personal development. Beyond the classroom, they are actively involved in extracurricular activities, contributing to both the university community and their field of study.`}
            </p>
          </div>
        </section>

        {/* student info */}
        <section className="flex flex-col space-y-5 lg:w-1/2 w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-normal text-2xl text-black">Student</h3>
            <p className="font-bold text-2xl text-black">Details</p>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="border border-black rounded-[20px] px-8 py-7 flex items-start w-full justify-between">
              <div>
                <section className="flex items-center space-x-4">
                  <div className="lg:h-16 h-10 w-10 lg:w-16 rounded-full bg-yellow-300/50 flex items-center justify-center">
                    <CiUser className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <h3 className="font-normal text-lg text-black">
                      {data?.data?.name}
                    </h3>
                    <p className="font-normal text-lg text-black">
                      {data?.data?.dob}
                    </p>
                  </div>
                </section>
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="font-normal text-lg text-black">
                  {`${data?.data?.gpa} Gpa`}
                </h3>
                <h3 className="font-normal text-lg text-black">
                  {data?.data?.registrationNumber}
                </h3>
                <h3 className="font-bold text-lg text-black">
                  {data?.data?.major}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentSinglePage;
