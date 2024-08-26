"use client";

import React, { useState } from "react";

type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ id, price, options }: Props) => {
  const [amount, setAmount] = useState(1);
  const [btnIndex, setBtnIndex] = useState(0);
  //this is an example of derived state::
  const additionalPrice = (options && options[btnIndex]?.additionalPrice) || 0;
  const calcPrice = (price + additionalPrice) * amount;
  return (
    <div className=" flex flex-col gap-6 lg:gap-8">
      <span className=" text-lg font-extrabold lg:text-xl">
        $ {calcPrice.toFixed(2)}
      </span>
      <div className=" flex items-center gap-10">
        {options?.map((option, index) => (
          <button
            key={index}
            onClick={() => setBtnIndex(index)}
            // text-white border border-red-500 bg-red-500
            className={`${
              btnIndex === index ? "bg-red-500 text-white" : ""
            } ring-1 ring-red-500 px-4 p-2 rounded transition-all duration-500  `}
          >
            {option.title}
          </button>
        ))}
      </div>


      <div className="flex items-center border border-red-500 text-red-500">
        <div className=" flex-1 flex items-center p-2.5 ">
          <span className=" flex-1">Quantity</span>

          <div className=" flex items-center gap-10">
            <button
              onClick={() => setAmount((prev) => prev - 1)}
              className={`${
                amount <= 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={amount <= 1}
            >
              {"<"}
            </button>
            <span>{amount}</span>
            <button onClick={() => setAmount((prev) => prev + 1)}>{">"}</button>
          </div>
        </div>

        <button className=" bg-red-500 text-white h-full p-2 uppercase text-sm">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
