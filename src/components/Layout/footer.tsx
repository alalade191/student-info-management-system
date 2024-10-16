import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#001A33]">
      <div className="flex lg:flex-row flex-col items-center lg:gap-32 gap-6 px-4 md:px-8 lg:px-20 lg:pt-28 pt-5">
        <div className="flex flex-col items-center lg:items-start lg:space-y-5 space-y-3">
          <h3 className="font-semibold text-[32px] text-[#F6F6F6]">Miva</h3>
          <p className="font-normal text-2xl text-[#F6F6F6] max-w-[400px]">
            Miva 2024 All Rights Reserved©
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col space-y-5">
            <h3 className="font-medium text-lg text-white">Discover</h3>
            <div className="flex flex-col space-y-2">
              <p className="font-normal text-base text-[#98A3B7]">Contact</p>
              <p className="font-normal text-base text-[#98A3B7]">Portfolio</p>
              <p className="font-normal text-base text-[#98A3B7]">Blog</p>
              <p className="font-normal text-base text-[#98A3B7]">Our team</p>
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <h3 className="font-medium text-lg text-white">Learn</h3>
            <div className="flex flex-col space-y-2">
              <p className="font-normal text-base text-[#98A3B7]">Blog</p>
              <p className="font-normal text-base text-[#98A3B7]">
                Get in Touch
              </p>
              <p className="font-normal text-base text-[#98A3B7]">FAQ</p>
              <p className="font-normal text-base text-[#98A3B7]">
                lattest news
              </p>
            </div>
          </div>

          <div className="lg:flex hidden flex-col space-y-5 ">
            <h3 className="font-medium text-lg text-white">Products</h3>
            <div className="flex flex-col space-y-2">
              <p className="font-normal text-base text-[#98A3B7]">Shop</p>
              <p className="font-normal text-base text-[#98A3B7]">Pricing</p>
              <p className="font-normal text-base text-[#98A3B7]">Blog</p>
              <p className="font-normal text-base text-[#98A3B7]">landing</p>
            </div>
          </div>

          <div className="lg:flex hidden flex-col space-y-5">
            <h3 className="font-medium text-lg text-white">Company</h3>
            <div className="flex flex-col space-y-2">
              <p className="font-normal text-base text-[#98A3B7]">About Us</p>
              <p className="font-normal text-base text-[#98A3B7]">
                Team and Privacy
              </p>
              <p className="font-normal text-base text-[#98A3B7]">Reviews</p>
              <p className="font-normal text-base text-[#98A3B7]">Services</p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-normal text-sm text-[#F6F6F6] text-center lg:py-20 py-5">
        © 2024 Miva 2024 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
