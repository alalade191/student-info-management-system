"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
export const HeroSection = () => {
  const { push } = useRouter();
  return (
    <div className="w-full bg-[#001A33] px-4 md:px-8 lg:px-20 lg:h-[700px] h-[550px] flex items-center justify-center mx-auto relative">
      <div className="flex flex-col lg:space-y-12 space-y-5">
        <div className=" flex flex-col space-y-5 items-center justify-center">
          <h3 className=" lg:max-w-[834.62px] max-w-[390px] lg:font-semibold font-extrabold lg:text-4xl text-2xl text-[#F6F6F6] flex items-center justify-center text-center">
            Best Learning Education Platform in The World
          </h3>
          <p className="lg:max-w-[780px] max-w-[390px] font-normal lg:text-base text-xs text-[#F6F6F6] text-center">
            We support more than 300 courses and provide the best customer
            service in the sector, catering to individuals, companies, and
            institutions.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button
            onClick={() => push("/signup")}
            className="font-medium lg:text-xl text-[12.5px] flex items-center gap-2 text-[#F6F6F6] text-center rounded-[10px] bg-[#2166EB]"
          >
            Start Now
          </Button>
        </div>
      </div>

      <div className="absolute top-12 left-0">
        <Image
          src="/main/firstball.svg"
          width={270}
          height={270}
          alt=""
          className=" lg:h-[270px] lg:w-[270px] w-[88.37px] h-[88.37px]"
        />
      </div>
      <div className="absolute top-10 lg:right-24 right-6">
        <Image
          src="/main/secondball.svg"
          width={300}
          height={300}
          alt=""
          className="lg:w-full w-[57.8px]"
        />
      </div>
      <div className="absolute lg:bottom-0 bottom-16 lg:left-20 left-3">
        <Image
          src="/main/thirdball.svg"
          width={200}
          height={200}
          alt=""
          className="w-[57.8px] h-[66.46px] lg:w-[200px] lg:h-[200px]"
        />
      </div>
      <div className="absolute bottom-16 lg:right-52 right-7">
        <Image
          src="/main/fourthball.svg"
          width={300}
          height={300}
          alt=""
          className="lg:w-full w-[58.11px]"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/main/fifthball.svg"
          width={300}
          height={300}
          alt=""
          className="lg:w-full w-[36.19px]"
        />
      </div>
    </div>
  );
};
