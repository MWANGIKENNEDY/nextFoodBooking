import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="  container mx-auto   flex flex-col lg:flex-row lg:items-center z-10 mt-20 gap-12   ">


<div className="  w-full  flex flex-col items-center justify-center lg:items-start gap-10 flex-1 md:py-20  ">
        <h1 className="text-3xl max-w-screen-sm lg:text-5xl font-extrabold mb-4 uppercase text-center text-red-500 lg:text-start">
          always fresh & always crispy & always hot
        </h1>
        <button className=" w-max capitalize text-sm text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded active:scale-95 transform transition-all duration-500 bg-red-500">
          order now
        </button>

        
      </div>
<div className="relative  lg:flex-1 h-[25rem]  rounded-md overflow-hidden lg:max-w-[600px] bg-red-400   ">
        <Image
          src="/slide1.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className=" h-full"
        />
      </div>


 


    </div>
  );
};

export default Header;
