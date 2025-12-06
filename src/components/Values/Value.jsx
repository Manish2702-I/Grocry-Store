import React from "react";
import Title from "../Title/Title";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from "../../assets/basket-full-vegetables.png"

const Value = () => {

    const leftdata = data.slice(0 , 2).map((items , index)=>{
        return (
            <div className="flex md:flex-row-reverse items-center gap-7 " key={index}>
                <div className="bg-orange-800 md:w-10 md:h-10 w-7 h-7 items-center text-white md:text-2xl rounded-full flex justify-center">{items.icon}</div>
                <div className="md:text-right">
                    <h3 className="text-2xl font-semibold mr-2 text-zinc-800">{items.title}</h3>
                    <p className="text-zinc-600">{items.para}</p>
                </div>
            </div>
        )
    })

    const rightdata = data.slice(2).map((items , index)=>{
        return (
            <div className="flex items-center gap-7" key={index}>
                <div className="bg-orange-800 md:w-10 md:h-10 w-7 h-7 items-center text-white md:text-2xl rounded-full flex justify-center">{items.icon}</div>
                <div className="">
                    <h3 className="text-2xl font-semibold mr-2 text-zinc-800">{items.title}</h3>
                    <p className="text-zinc-600">{items.para}</p>
                </div>
            </div>
        )
    })

  return (
    <section>
      <div className="">
        <Title name="Our Values" />
        <div className="flex md:flex-row flex-col md:gap-5 gap-5 md:mt-20 mt-10 ">
            <div className="flex flex-col justify-between md:min-h-100 gap-5">
                {leftdata}
            </div>
            <div className=" md:flex w-[55vh] hidden">
                <img src={basket}  />
            </div>
            <div className="flex flex-col justify-between md:min-h-100 gap-5">
                {rightdata}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Value;

const data = [
  {
    id: 1,
    title: "trust",
    para: "it is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "it is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "it is a long established fact that a reader will be distracted by the readable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Orgnic",
    para: "it is a long established fact that a reader will be distracted by the readable.",
    icon: <FaSeedling />,
  },
];
