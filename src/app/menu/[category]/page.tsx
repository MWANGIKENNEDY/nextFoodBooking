import { pizzas } from "@/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="container mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pizzas.map((pizza, index) => (
        <Link
          href={`/product/${pizza.id}`}
          key={index}
          className=" p-4 min-h-[300px]  flex flex-col border border-red-500/20 rounded-lg text-red-500 even:bg-fuchsia-50  "
        >
          {/* image section */}
          <div className="relative h-[80%]  ">
            {pizza.img && (
              <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
            )}
          </div>

          {/* text / button section */}
          <div className=" flex justify-between items-center flex-1 group py-4 ">
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
