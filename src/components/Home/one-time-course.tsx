import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
export const OneTimeCourse = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20">
      <div className="w-full bg-[#2166EB] rounded-[20px] border border-[#2166EB]  relative">
        <div className="pl-10 lg:py-20 py-6 flex flex-col space-y-5">
          <div className="flex items-center gap-2">
            <p className="font-normal text-sm  text-[#F6F6F6]">
              Buy and sell courses
            </p>
          </div>

          <div className=" flex flex-col gap-2">
            <h3 className="lg:max-w-[540px] max-w-[210px] font-semibold lg:text-[40px] text-[text-[12.19px] lg:leading-[60px] leading-[18.28px] text-[#F6F6F6]">
              Buy and sell +300 courses easily and instantly
            </h3>
            <p className="lg:font-normal lg:max-w-[540px] max-w-[160px] font-semibold  lg:text-base text-[4.88px] text-[#F6F6F6]">
              Buy and sell at the best price with a single click without
              complications
            </p>
          </div>

          <div className="flex items-cent">
            <Button className="font-medium lg:text-xl text-[4.88px] flex items-center gap-2 text-[#2166EB] text-center rounded-[10px] bg-[#F6F6F6]">
              Start Learning
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/main/coin.svg"
            width={480}
            height={480}
            alt="coin"
            className="w-[120px] h-[120px] lg:h-[480px] lg:w-[480px]"
          />
        </div>
      </div>
    </div>
  );
};
