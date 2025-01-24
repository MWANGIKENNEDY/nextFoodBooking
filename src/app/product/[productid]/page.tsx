import Price from "@/components/Price/Price";
import { singleProduct } from "@/products";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="container bg-red-100/50 py-10 mx-auto mt-16 lg:mt-24   grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      {/* image section */}

      { singleProduct.img && <div className="relative h-[400px]">
        <Image
          src={singleProduct.img}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div> }

      {/* text section */}

      <div className=" flex flex-col text-red-500 gap-4   justify-center md:gap-5 ">
        <h2 className=" font-extrabold uppercase text-red-700 text-3xl lg:text-3xl text-center lg:text-left">
          {singleProduct.title}
        </h2>

        <p className=" text-lg text-red-400 max-w-lg mx-auto lg:mx-0 text-center lg:text-left ">
        {singleProduct.desc}
        </p>




{/* pricing component */}

<Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options} />
    

      </div>
    </div>
  );
};

export default SingleProduct;
