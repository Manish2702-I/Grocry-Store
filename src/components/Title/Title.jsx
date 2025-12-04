import React, { useState } from "react";
import images from "../../assets/fruits-and-veggies.png";
import dairy from "../../assets/dairy-and-eggs.png";
import Seafood from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";

const Title = ({ name }) => {
  const randercard = user.map((item, index) => {
    return (
      <div className="flex-1 basis-[300px]">
        <div className=" w-full min-h-[29vh] relative -mb-10">
          <img src={item.image} className="absolute bottom-0" />
        </div>
        <div className="bg-zinc-100 rounded-md pt-12 pl-4 pb-2">
          <h3 className="text-2xl font-semibold">{item.name}</h3>
          <p className="text-zinc-400 mt-3">{item.para}</p>
          <Button content="See All" />
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="font-bold md:text-5xl text-center md:mt-25 mt-10 text-zinc-500 text-4xl">
        {name}
      </div>
      <div className="flex gap-10 md:mt-20 flex-wrap">{randercard}</div>
    </div>
  );
};

export default Title;

const user = [
  {
    id: 1,
    image: images,
    name: "Fruits & Veggies",
    para: "Fres. organic produce sourced daily from local farm. Explore a wide range of seasonal fruits and crips vegetables.",
  },
  {
    id: 2,
    image: dairy,
    name: "Dairy & Eggs",
    para: "Wholesome dairy products and free-range eggs. From cremy milk and yogurt to artisanal cheeses.",
  },
  {
    id: 3,
    image: Seafood,
    name: "Meat & SeaFood",
    para: "High-quality, responsibly sourced meat and seafood.choose from fresh cuts,marinated optins,and more.",
  },
];
