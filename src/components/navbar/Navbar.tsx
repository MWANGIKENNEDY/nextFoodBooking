import React from "react";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <>
      <nav className=" h-20  sticky top-0 left-0 right-0 text-base  shadow-xl  dark:bg-slate-600 uppercase z-50 ">
        {/* MOBILE SCREEN */}

     

        <div className=" container mx-auto px-4   h-full  flex justify-between items-center xl:hidden">
          <Link href="/" className="flex items-center space-x-3">
            <span className=" font-semibold text-lg tracking-wide text-orange-500">
              MASSIMO
            </span>
          </Link>
          <MobileMenu />
        </div>

        {/* Large Screens */}

        <div className="container mx-auto h-full hidden xl:flex  justify-between items-center px-4 md:px-8 xl:px-16  2xl:px-64    ">
          {/* left section */}
          
          <div className=" flex gap-4">
            <Link href="/" className=" dark:text-white">
              Homepage
            </Link>
            <Link href="/menu" className=" dark:text-white">
              Menu
            </Link>
            <Link href="/contact" className=" dark:text-white">
              Contact
            </Link>
          </div>


{/* middle section */}
          <Link href="/" className="flex items-center ">
            <span className=" font-semibold text-2xl tracking-wide text-orange-500 ">
              MASSIMO
            </span>
          </Link>


          {/* right section */}

          <div className="text-base space-x-6   hidden md:flex  items-center   ">
<div className=" flex items-center gap-1 bg-orange-300 text-red-500 rounded-md px-1">
    <PhoneIcon className=" h-4 w-4" />
    <small className=" text-xs">555 44 00</small>
</div>
           
           
            <Link href="/orders" className=" dark:text-white">
              orders
            </Link>
            <Link href="/cart" className=" dark:text-white">
              Cart (3)
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
