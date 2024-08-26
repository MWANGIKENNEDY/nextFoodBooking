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
          <Link href="/" onClick={() => setOpen((open) => !open)}>
            Home Page
          </Link>
          <Link href="/house" onClick={() => setOpen((open) => !open)}>
            Menu
          </Link>
          <Link href="/recommended" onClick={() => setOpen((open) => !open)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
