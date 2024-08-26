import Image from "next/image";
import React from "react";
import MyCountdown from "../Countdown/Countdown";

const Offer = () => {
  return (
    <div className="min-h-[70vh] px-4 flex flex-col justify-center transition-all duration-500  xl:min-h-[50vh] text-white bg-my-banner bg-cover">
      <div className="h-full container gap-20 mx-auto flex flex-col xl:flex-row ">
        {/* text section */}

        <div className=" flex flex-col gap-8 items-center justify-center lg:items-start">
          <h2 className=" font-bold text-3xl xl:text-5xl capitalize text-center lg:text-start">
            Delicious burger & french Fry
          </h2>

          <p className=" text-center lg:text-start lg:text-lg">
            Progressively simplify effective e-toilers and process-centric
            methods of empowerment. Quickly pontificate parallel.
          </p>

          <MyCountdown />

          <button className=" bg-red-500 px-4 py-2 rounded w-max">
            Order Now
          </button>
        </div>

        {/* image section */}

        <div className="relative min-h-[200px]  mb-auto">
          <Image
            src="/offerProduct.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
