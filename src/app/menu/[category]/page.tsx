import { pizzas } from "@/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {pizzas.map((pizza, index) => (
        <Link
          href={`/product/${pizza.id}`}
          key={index}
          className=" p-4 h-[50vh] flex flex-col border border-red-500 text-red-500 even:bg-fuchsia-50  "
        >
          {/* image section */}
          <div className="relative h-[80%]  ">
            {pizza.img && (
              <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
            )}
          </div>

          {/* text / button section */}
          <div className=" flex justify-between items-center flex-1 group ">
            <span className=" font-bold text-xl uppercase">{pizza.title}</span>
            <h1 className=" text-sm group-hover:hidden ">$ {pizza.price}</h1>
            <button className=" uppercase text-sm bg-red-500 text-white h-max rounded p-1 hidden group-hover:block ">
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
