import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem autem beatae suscipit saepe molestiae perspiciatis nobis.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem autem beatae suscipit saepe molestiae perspiciatis nobis.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem autem beatae suscipit saepe molestiae perspiciatis nobis.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem autem beatae suscipit saepe molestiae perspiciatis nobis.",
      live: true,
      case: true,
    },
  ];

  const [posi, setPosi] = useState(0);

  const mover = (val) => {
    setPosi(val * 23);
  };

  return (
    <div className="mt-32 relative ">
      {products.map((item, index) => (
        <Product val={item} mover={mover} count={index} key={index} />
      ))}

      <div className="h-full w-full absolute top-0 pointer-events-none ">
        <motion.div //for animate
          initial={{ y: posi }}
          animate={{ y: posi + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] rounded-md left-[44%] -translate-x-[50%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -posi + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-md "
          >
            <video
              className="absolute object-cover rounded-lg overflow-hidden"
              autoPlay
              muted
              loop
              playsInline
              src={arqitel}
            />
          </motion.div>

          <motion.div
            animate={{ y: -posi + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-md "
          >
            <video
              className="absolute object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={ttr}
            />
          </motion.div>

          <motion.div
            animate={{ y: -posi + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-md "
          >
            <video
              className="absolute object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={yir}
            />
          </motion.div>

          <motion.div
            animate={{ y: -posi + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-md "
          >
            <video
              className="absolute object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={yahoo}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
