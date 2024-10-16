"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { convertDate, convertToAmPm, getTimeParams } from "../time";
export const Header = () => {
  const navbar = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Courses",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const renderNavLinks = () =>
    navbar.map(({ name, link }) => (
      <Link
        href={link}
        key={name}
        className="lg:text-xl text-lg font-normal border-none bg-none mb-6 lg:mb-0 hover:underline"
      >
        <p className="mb-7 lg:mb-0" onClick={() => setOpen(false)}>
          {name}
        </p>
      </Link>
    ));

  return (
    <header className="w-full sticky top-0 z-[99] backdrop-blur-md bg-[#001A33] px-4 md:px-8 lg:px-20 border-[#F6F6F6] border-t border-b">
      <nav className=" mx-auto py-2 md:py-6 flex items-center justify-between">
        <Link className="" href="/">
          <h1 className="font-semibold text-xl lg:text-3xl text-white">Miva</h1>
        </Link>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#001A33] text-white px-4 py-4">
            {renderNavLinks()}
          </div>
        )}

        {/* Desktop Menu */}
        <div className="lg:flex text-[#F6F6F6] items-center gap-6 hidden">
          {renderNavLinks()}
        </div>

        <div className="lg:block hidden">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <p className="border-r border-greybg-500 pr-2 text-white">
                {convertDate()}
              </p>
              <p className="text-white pl-2">
                {convertToAmPm(
                  `${getTimeParams()?.hours}:${
                    getTimeParams()?.minutes <= 9
                      ? `0${getTimeParams()?.minutes}`
                      : getTimeParams()?.minutes
                  }`
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <Hamburger
            toggled={isOpen}
            size={25}
            toggle={setOpen}
            color="#FFFFFF"
          />
        </div>
      </nav>
    </header>
  );
};
