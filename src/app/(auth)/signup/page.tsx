"use client";
import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSpinner } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { studentHandle } from "../../../../axios-config";
import { toast, ToastContainer } from "react-toastify";
import { ErrorType, handleError } from "@/lib/handle-error";
interface ISignUp {
  username: string;
  email: string;
  password: string;
}
const SignUp = () => {
  const { push } = useRouter();
  const [passwordvisible, setPasswordVisible] = useState<boolean>(false);
  const toggleVisibility = () => {
    setPasswordVisible(!passwordvisible);
  };

  const formSchema = z.object({
    email: z.string().email({
      message: "Enter your email address",
    }),
    password: z.string().min(1, "Enter your password"),
    username: z.string().min(1, "Enter your full name"),
  });

  const { handleSubmit, register, reset, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const { errors } = formState;
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ISignUp) => {
      await studentHandle.post("/api/auth/signup", data);
    },
    mutationKey: ["create-account"],

    onSuccess() {
      toast.success("account created successfully");
      reset();
      push("/");
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
    <section className="flex items-center w-full justify-center px-4 md:px-6 lg:px-14  h-screen relative">
      <ToastContainer />
      <p className="absolute right-4 top-4 font-medium text-lg text-black ">
        Already have an Account?{" "}
        <span
          onClick={() => push("/")}
          className="text-[#001A33] cursor-pointer"
        >
          Log in
        </span>
      </p>
      <div className=" h-full flex flex-col justify-center relative">
        <section className="w-[33.875rem] flex flex-col gap-12">
          <div className="flex flex-col space-y-2">
            <h3 className="font-normal text-[2.625rem] text-black">Sign Up</h3>
            <p className="font-normal text-base text-black">
              Fill out the first to get started with Funder
            </p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-5"
            >
              <div className="flex items-start w-full space-x-5">
                <div className="w-full">
                  <Input
                    placeholder="Username"
                    className=" rounded-2xl !h-14"
                    {...register("username")}
                  />
                  {errors.username && (
                    <div className="text-red-500 text-sm font-normal pt-1">
                      {errors.username?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <Input
                  placeholder="Email address"
                  className="rounded-2xl !h-14"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.email?.message}
                  </div>
                )}
              </div>
              <div className="w-full relative">
                <Input
                  placeholder="Password"
                  className="rounded-2xl !h-14"
                  type={passwordvisible ? "text" : "password"}
                  {...register("password")}
                />
                {errors.password && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.password?.message}
                  </div>
                )}
                <span
                  onClick={toggleVisibility}
                  className=" absolute top-[30%] right-4"
                >
                  {passwordvisible ? (
                    <IoEyeOutline color="#6D6D6D" className="cursor-pointer" />
                  ) : (
                    <IoEyeOffOutline
                      color="#6D6D6D"
                      className="cursor-pointer"
                    />
                  )}
                </span>
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 !h-14 rounded-2xl bg-zeus text-black font-medium"
                >
                  {isPending ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    "Sign up"
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
export default SignUp;