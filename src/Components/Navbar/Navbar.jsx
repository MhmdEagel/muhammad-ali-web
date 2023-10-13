import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle, AiOutlineArrowRight } from "react-icons/ai";

export default function Navbar() {
  const [showSide, setShowSide] = useState(false);

  function displayStyle () {
    return showSide ? {display : "block"} : {display: "none"}
  }

  
  function onNavClickHandle() {
    setShowSide(true);
  }
  
  function onNavClickHideHandle()  {
    setShowSide(false);
  }
  
  function MobileNav() {
    return (
      <div className="mobile-nav" style={displayStyle()}>
        <span
          className="text-2xl absolute top-0 left-0 m-4 cursor-pointer"
          onClick={onNavClickHideHandle}
        >
          <AiOutlineCloseCircle />
        </span>
        <ul
          className="flex flex-col gap-4 [&>*]:cursor-pointer [&>*]:border [&>*]:px-2 [&>*]:py-2
         [&>*]:rounded-lg [&>*]:text-left text-lg font-bold mt-16 font-openSans"
        >
          <li className="flex justify-between items-center gap-4">
            Home
            <span>
              <AiOutlineArrowRight />
            </span>
          </li>
          <li className="flex justify-between items-center gap-4">
            About
            <span>
              <AiOutlineArrowRight />
            </span>
          </li>
          <li className="flex justify-between items-center gap-4">
            Contact
            <span>
              <AiOutlineArrowRight />
            </span>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <nav className="text-textPrimary p-4 font-youngSerif fixed top-0 left-0 right-0 z-30 bg-primary">
      <div className="flex items-center">
        <h1 className="text-xl mr-auto">Muhammad Ali</h1>
        <ul className="sm:flex gap-6 hidden">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>  
        </ul>
        <span
          className="text-xl sm:hidden cursor-pointer"
          onClick={onNavClickHandle}
        >
          <GiHamburgerMenu />
        </span>
      </div>
      <MobileNav />
    </nav>
  );
}
