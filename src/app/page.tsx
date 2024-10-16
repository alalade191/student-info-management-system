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
import { toast, ToastContainer } from "react-toastify";
import { ErrorType, handleError } from "@/lib/handle-error";
import { studentHandle } from "../../axios-config";
import Link from "next/link";
interface ISignIn {
  email: string;
  password: string;
}
const SignIn = () => {
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
  });

  const { handleSubmit, register, reset, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors } = formState;
  const { mutate, isPending } = useMutation({
    mutationFn: async (user: ISignIn) => {
      await studentHandle.post("/api/auth/signin", user);
    },

    onSuccess() {
      toast.success("account signin successfully");
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
    <section className="flex items-center w-full justify-center px-4 md:px-6 lg:px-14  h-screen relative">
      <ToastContainer />
      <div className="absolute right-4 top-4 font-medium text-lg text-black ">
        Don&apos;t have an Account?{" "}
        <Link
          href="signup"
          className="text-[#001A33] cursor-pointer hover:text-gray-600"
        >
          Sign up
        </Link>
      </div>
      <section className=" h-full w-full items-center flex flex-col justify-center relative">
        <section className="lg:w-[33.875rem] w-full flex flex-col lg:gap-12 gap-5">
          <div className="flex flex-col space-y-2">
            <h3 className="font-normal text-[2.625rem] text-black">
              Welcome Back
            </h3>
            <p className="font-normal text-base text-black">
              Fill out your login details to proceed
            </p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-5"
            >
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
                    "Sign in"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </section>
  );
};
export default SignIn;
