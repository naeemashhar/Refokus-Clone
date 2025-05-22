import React, { useState } from "react";
import { useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  function imagesShow(arr) {
    setImages(prev =>(
      prev.map((item,index) =>(
        arr.indexOf(index)== -1 ? (
          {...item, isActive : false}
        )
        : {...item, isActive: true}
      ))
    ))
  }

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);

        break;
      case 1:
        imagesShow([0]);

        break;
      case 2:
        imagesShow([0, 1]);

        break;
      case 3:
        imagesShow([0, 1, 2]);

        break;
      case 4:
        imagesShow([0, 1, 2, 3]);

        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);

        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);

        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="select-none text-[30vw] leading-none font-medium tracking-tight">
          work
        </h1>
        <div className="w-full h-screen absolute top-0  "></div>
        {images.map(
          (item, index) =>
            item.isActive && (
              <img
                key={index}
                className="absolute w-60 rounded -translate-x-[50%] -translate-y-[50%]"
                src={item.url}
                style={{ top: item.top, left: item.left }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Work;
