"use client";
import React, { useState } from "react";
import { Bars4Icon, StopIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" xl:hidden">
      {open ? (
        <StopIcon
          className="h-8 w-8 cursor-pointer dark:text-white"
          onClick={() => setOpen((open) => !open)}
        />
      ) : (
        <Bars4Icon
          className="h-8 w-8 cursor-pointer dark:text-white"
          onClick={() => setOpen((open) => !open)}
        />
      )}

      {open && (
        <div className="absolute top-20 w-full h-[calc(100vh-80px)] z-20 bg-white text-orange-400 left-0 flex flex-col items-center justify-center gap-4 text-2xl">
        <Link onClick={() => setOpen((open) => !open)} href="/" className=" dark:text-white">
              Homepage
            </Link>
            <Link onClick={() => setOpen((open) => !open)} href="/menu" className=" dark:text-white">
              Menu
            </Link>
            <Link onClick={() => setOpen((open) => !open)} href="/orders" className=" dark:text-white">
              orders
            </Link>
            <Link onClick={() => setOpen((open) => !open)} href="/cart" className=" dark:text-white">
              Cart (3)
            </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
