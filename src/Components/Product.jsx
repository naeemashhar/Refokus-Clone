import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div onMouseEnter={() =>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between hover:scale-105 transition-all duration-300">
        <h1 className="text-5xl font-medium">{val.title}</h1>
        <div className="details w-1/3">
          <p className="mb-10">{val.description}</p>

          <div className="flex items-center gap-10">
            {val.live && <Button title="Live Work" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
