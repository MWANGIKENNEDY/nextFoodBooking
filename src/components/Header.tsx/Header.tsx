import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="  container mx-auto px-4 md:px-8 xl:px-16 min-h-[80vh] xl:min-h-[70vh] flex flex-col xl:flex-row   xl:items-center z-10   ">


<div className="  w-full  flex flex-col items-center justify-center lg:items-start gap-10 flex-1 md:py-20  ">
        <h1 className="text-3xl md:text-4xl max-w-screen-sm xl:text-5xl font-extrabold mb-4 uppercase text-center text-red-500 lg:text-start">
          always fresh & always crispy & always hot
        </h1>
        <button className=" w-max capitalize text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded active:scale-95 transform transition-all duration-500 bg-red-500">
          order now
        </button>

        
      </div>
<div className="relative  h-96 xl:flex-1  xl:h-[350px]    ">
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
