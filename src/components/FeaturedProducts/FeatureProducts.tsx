import Image from "next/image";
import React from "react";

const featuredProducts = [
  {
    title: "Margherita Pizza",
    image: "/temporary/p1.png",
    desc: "Classic Margherita pizza with fresh mozzarella, basil, and a rich tomato sauce.",
    price: "$12.99",
  },
  {
    title: "Pepperoni Pizza",
    image: "/temporary/p2.png",
    desc: "Pepperoni pizza with a crispy crust, layered with spicy pepperoni and gooey cheese.",
    price: "$14.50",
  },
  {
    title: "BBQ Chicken Pizza",
    image: "/temporary/p3.png",
    desc: "BBQ Chicken pizza topped with grilled chicken, onions, and smoky BBQ sauce.",
    price: "$15.25",
  },
  {
    title: "Vegetarian Pizza",
    image: "/temporary/p4.png",
    desc: "Vegetarian pizza loaded with bell peppers, olives, mushrooms, and fresh spinach.",
    price: "$13.75",
  },
  {
    title: "Hawaiian Pizza",
    image: "/temporary/p5.png",
    desc: "Hawaiian pizza with sweet pineapple, savory ham, and a perfect blend of cheeses.",
    price: "$14.00",
  },
  {
    title: "Four Cheese Pizza",
    image: "/temporary/p6.png",
    desc: "Four Cheese pizza featuring mozzarella, cheddar, parmesan, and gorgonzola.",
    price: "$16.50",
  },
  {
    title: "Meat Lovers Pizza",
    image: "/temporary/p7.png",
    desc: "Meat Lovers pizza stacked with pepperoni, sausage, bacon, and ham.",
    price: "$17.25",
  },
  {
    title: "Spicy Buffalo Pizza",
    image: "/temporary/p8.png",
    desc: "Spicy Buffalo pizza with tangy buffalo sauce, chicken, and a kick of blue cheese.",
    price: "$15.99",
  },
  {
    title: "Supreme Pizza",
    image: "/temporary/p9.png",
    desc: "Supreme pizza with a generous mix of meats, veggies, and extra cheese.",
    price: "$18.75",
  },
  {
    title: "White Pizza",
    image: "/temporary/p10.png",
    desc: "White pizza with a creamy garlic sauce, ricotta, and fresh spinach.",
    price: "$13.50",
  },
  {
    title: "Mushroom and Truffle Pizza",
    image: "/temporary/p11.png",
    desc: "Mushroom and Truffle pizza with earthy mushrooms and a drizzle of truffle oil.",
    price: "$19.00",
  },
  {
    title: "Prosciutto and Arugula Pizza",
    image: "/temporary/p12.png",
    desc: "Prosciutto and Arugula pizza with thin slices of prosciutto and peppery arugula.",
    price: "$20.25",
  },
];

const FeatureProducts = () => {
  return (
    <div className="  container mx-auto w-screen px-4   ">

      <div className=" w-full  flex flex-nowrap overflow-x-scroll  scroll-smooth snap-x snap-mandatory gap-4 ">
        {featuredProducts.map((featuredProduct, index) => (
          <div
            key={index}
            className=" bg-black shadow-2xl flex flex-col p-2 snap-start justify-center w-[40%] md:w-[30%] xl:w-[24%]   flex-shrink-0 hover:bg-red-50    text-red-500 transition-all duration-500"
          >
            {/* image section */}

            <div className=" flex-1 relative min-h-[200px] w-full z-10">
              <Image
              
                src={featuredProduct.image}
                alt=""
                layout="fill"
                objectFit="contain"
                className=" hover:rotate-[60deg] transition-all duration-500 "
              />
            </div>

            {/* test section */}

            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <h3 className="uppercase text-xl text-center font-bold">
                {featuredProduct.title}
              </h3>

              <small className="text-center max-w-screen-sm">{featuredProduct.desc}</small>

              <span className=" text-xl font-bold">{featuredProduct.price}</span>

              <button className=" text-white bg-red-500 px-5 py-2 w-max rounded ">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
