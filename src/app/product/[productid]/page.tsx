import Price from "@/components/Price/Price";
import { singleProduct } from "@/products";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mx-auto max-w-screen-2xl min-h-[calc(100vh-6.75rem)] grid grid-rows-[1fr,1fr] py-2 md:grid-rows-1 md:grid-cols-2 lg:gap-10">
      {/* image section */}

      { singleProduct.img && <div className="relative">
        <Image
          src={singleProduct.img}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div> }

      {/* text section */}

      <div className=" flex flex-col text-red-500 gap-4   justify-center md:gap-5">
        <h2 className=" font-extrabold uppercase text-red-700 text-xl lg:text-3xl">
          {singleProduct.title}
        </h2>

        <p className=" text-sm text-red-400 lg:text-base">
        {singleProduct.desc}
        </p>




{/* pricing component */}

<Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options} />
    

      </div>
    </div>
  );
};

export default SingleProduct;
