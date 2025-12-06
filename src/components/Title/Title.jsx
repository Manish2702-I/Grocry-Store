import React, { useState } from "react";
const Title = ({ name }) => {
  return (
    <div>
      <div className="font-bold md:text-5xl text-center md:mt-25 mt-10 text-zinc-500 text-4xl">
        {name}
      </div>
    </div>
  );
};

export default Title;