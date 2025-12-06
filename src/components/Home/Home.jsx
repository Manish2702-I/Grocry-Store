import React from "react";
import Navebar from "../Navbar/Navebar";
import Hero from "../Hero/Hero";
import Value from "../Values/Value";
import Catogary from "../Catogary/Catogary";
import Product from "../Products/Product";

const Home = () => {
  return (
    <div className="w-full min-h-screen md:p-10 p-6 ">
      <div>
        <Navebar />
        <Hero />
        <Catogary />
        <Value />
        <Product />
      </div>
    </div>
  );
};

export default Home;
