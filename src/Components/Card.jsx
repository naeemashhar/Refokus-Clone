import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover }) => {
  return (
    <div className={`bg-zinc-800 p-5 rounded-md min-h-[25rem] flex flex-col justify-between ${width} hover:${hover}`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-sm text-zinc-300">Up Next: Culture</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever HEading</h1>
      </div>



      <div className="dn w-full ">
        {start && (
          <>
            <h1 className="text-8xl tracking-tight leading-none font-medium">
              Start a Project
            </h1>
            <button className="text-sm mt-4 rounded-full px-5 py-2 border-1 border-zinc-300">
              Contact Us
            </button>
            
          </>
        )}

        {para && (
          <>
            <p className=" text-sm text-zinc-300">
              Expolre what drives our team.
            </p>
          </>
        )}
      </div>


    </div>
  );
};

export default Card;
