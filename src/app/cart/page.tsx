import { LockClosedIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className=" h-[calc(100vh-6.75rem)]  container mx-auto px-4 md:px-8 xl:px-16 relative lg:flex container  ">

      <div className=" overflow-y-auto   h-full w-full space-y-2">
        {/* cart item  */}

        <div className="flex   h-1/4 ">
          <div className="relative w-1/4">
            <Image
              src="/temporary/p1.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className=" w-3/4 flex justify-between items-center px-4">
            <div className="flex flex-col">
              <span>Sicilian pizza</span>
              <span>Large</span>
            </div>
            <span>$ 24.90</span>
            <LockClosedIcon className=" h-5 w-5" />
          </div>
        </div>

        <div className="flex  h-1/4  ">
          <div className="relative w-1/4">
            <Image
              src="/temporary/p1.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className=" w-3/4  flex justify-between items-center px-4">
            <div className="flex flex-col">
              <span>Sicilian pizza</span>
              <span>Large</span>
            </div>
            <span>$ 24.90</span>
            <LockClosedIcon className=" h-5 w-5" />
          </div>
        </div>

        <div className="flex  h-1/4  ">
          <div className="relative w-1/4">
            <Image
              src="/temporary/p1.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className=" w-3/4  flex justify-between items-center px-4">
            <div className="flex flex-col">
              <span>Sicilian pizza</span>
              <span>Large</span>
            </div>
            <span>$ 24.90</span>
            <LockClosedIcon className=" h-5 w-5" />
          </div>
        </div>

        <div className="flex   h-1/4  ">
          <div className="relative w-1/4">
            <Image
              src="/temporary/p1.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className=" w-3/4  flex justify-between items-center px-4">
            <div className="flex flex-col">
              <span>Sicilian pizza</span>
              <span>Large</span>
            </div>
            <span>$ 24.90</span>
            <LockClosedIcon className=" h-5 w-5" />
          </div>
        </div>

        <div className="flex   h-1/4   ">
          <div className="relative w-1/4">
            <Image
              src="/temporary/p1.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className=" w-3/4  flex justify-between items-center px-4">
            <div className="flex flex-col">
              <span>Sicilian pizza</span>
              <span>Large</span>
            </div>
            <span>$ 24.90</span>
            <LockClosedIcon className=" h-5 w-5" />
          </div>
        </div>

      </div>

      <div className="rounded bg-white flex flex-col gap-4  text-red-500 ring-1 ring-red-500 sticky bottom-0 p-3 py-2 w-full lg:h-max lg:w-1/3 lg:sticky lg:top-[6.75rem] lg:mt-5 ">

        <div className="flex justify-between items-center text-lg font-bold"> <span className=" ">Subtotal (3 items)</span> <span>$ 81.70</span></div>
        <div className="flex justify-between items-center "> <span>Service Cost</span> <span>$ 0.00</span></div>
        <div className="flex justify-between items-center"> <span>Delivery Cost</span> <span>Free</span></div>

        <div className="flex justify-between items-center text-lg font-bold"> <span>Total (incl. vat)</span> <span className=" ">$ 81.70</span></div>


<div className="flex justify-end">
<button className=" bg-red-500 text-white px-4 py-2 rounded self-end uppercase">checkout</button>
</div>

      </div>

    </div>
  );
};

export default CartPage;
