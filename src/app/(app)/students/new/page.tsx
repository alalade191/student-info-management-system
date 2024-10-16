"use client";
import React from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSpinner } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";

import { studentHandle } from "../../../../../axios-config";
import { ErrorType, handleError } from "@/lib/handle-error";
export interface IAddStudent {
  registrationNumber: string;
  name: string;
  major: string;
  dob: string;
  gpa: string;
}
const CreateStudent = () => {
  const { push } = useRouter();

  const formSchema = z.object({
    name: z.string().min(4, "Enter your name"),
    registrationNumber: z.string().min(4, "Enter your registration number"),
    major: z.string().min(4, "Enter your major"),
    dob: z.string().min(4, "Enter your date"),
    gpa: z.string().min(4, "Enter your Gpa"),
  });

  const { handleSubmit, register, formState, reset } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      registrationNumber: "",
      major: "",
      dob: "",
      gpa: "",
    },
  });

  const { errors } = formState;

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: IAddStudent) => {
      await studentHandle.post("/api/students", data);
    },
    mutationKey: ["create"],

    onSuccess() {
      toast.success("list created successfully");
      reset();
      push("/students");
    },
    onError(error) {
      handleError(error as ErrorType);
      console.log(error);
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <section className="flex items-center w-full justify-center px-4 md:px-6 lg:px-14  h-screen">
      <ToastContainer />
      <div className=" h-full flex flex-col items-center justify-center relative w-full">
        <section className="lg:w-[33.875rem] w-full flex flex-col lg:gap-12 gap-5">
          <div className="flex flex-col space-y-2">
            <h3 className="font-normal text-[2.625rem] text-black">
              Hi there!
            </h3>
            <p className="font-normal text-base text-black">Create a student</p>
          </div>
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-5 w-full"
            >
              <div className="w-full">
                <Input
                  placeholder="Enter your name"
                  className="rounded-2xl !h-14"
                  {...register("name")}
                />
                {errors.name && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.name?.message}
                  </div>
                )}
              </div>

              <div className="w-full">
                <Input
                  placeholder="Enter your registration number"
                  className="rounded-2xl !h-14"
                  {...register("registrationNumber")}
                />
                {errors.registrationNumber && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.registrationNumber?.message}
                  </div>
                )}
              </div>

              <div className="w-full">
                <Input
                  placeholder="Enter your major"
                  className="rounded-2xl !h-14"
                  {...register("major")}
                />
                {errors.major && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.major?.message}
                  </div>
                )}
              </div>

              <div className="w-full">
                <Input
                  placeholder="Enter your date of birth 20-02-2022"
                  className="rounded-2xl !h-14"
                  {...register("dob")}
                />
                {errors.dob && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.dob?.message}
                  </div>
                )}
              </div>

              <div className="w-full">
                <Input
                  placeholder="Enter your Gpa"
                  className="rounded-2xl !h-14"
                  {...register("gpa")}
                />
                {errors.gpa && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.gpa?.message}
                  </div>
                )}
              </div>

              <div className="w-full">
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 !h-14 rounded-2xl bg-zeus text-black font-medium"
                >
                  {isPending ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    "Create a student"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};
export default CreateStudent;
