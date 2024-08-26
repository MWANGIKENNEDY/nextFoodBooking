import Link from "next/link";
import React from "react";

const menus = [
  {
    title: "italian pastas",
    desc: "Savour the taste of perfection with our excuisit Italian hadnmade pasta menu.",
    bg: "bg-menu-one",
    text: "white",
    btnbg: "white",
    btntext: "red-500",
    slug: "pastas",
  },
  {
    title: "juicy burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gournet toppings galore.",
    bg: "bg-menu-two",
    text: "black",
    btnbg: "black",
    btntext: "white",
    slug: "burgers",
  },
  {
    title: "cheesy pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    bg: "bg-menu-three",
    text: "white",
    btnbg: "white",
    btntext: "red-500",
    slug: "pizzas",
  },
];

const MenuPage = () => {
  return (
    <div className=" grid grid-rows-[1fr,1fr,1fr] lg:grid-cols-3 lg:grid-rows-1 lg:place-items-center min-h-[calc(100vh-6.75rem)] w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mx-auto ">
      {menus.map((menu, index) => (
        <Link
          href={`/menu/${menu.slug}`}
          key={index}
          className={`bg-cover lg:h-[50%] w-full ${menu.bg} text-${menu.text} flex flex-col gap-2 p-4`}
        >
          <h3 className=" uppercase font-bold text-3xl">{menu.title}</h3>

          <small className="w-1/3">{menu.desc}</small>

          <button
            className={`bg-${menu.btnbg} text-${menu.btntext} px-2 py-1 rounded w-max`}
          >
            Explore Now
          </button>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
