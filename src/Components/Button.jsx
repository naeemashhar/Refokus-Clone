import { motion } from "framer-motion";
import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Start a Project" }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1, backgroundColor: "#f4f4f5" }, 
        hover: {
          scale: 1.05,
          backgroundColor: "#e2e8f0", 
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
          },
        },
      }}
      className="w-40 h-10 rounded-full flex items-center justify-between px-4 py-0 cursor-pointer"
    >
     
      <motion.span
        className="text-sm font-medium text-black"
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: {
            y: [-10, 0],
            opacity: [0, 1],
            transition: {
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            },
          },
        }}
      >
        {title}
      </motion.span>

 
      <motion.div
        className="text-lg text-black"
        variants={{
          rest: { x: 0, opacity: 0 },
          hover: {
            x: [-10, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.15,
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            },
          },
        }}
      >
        <IoIosReturnRight />
      </motion.div>
    </motion.div>
  );
};

export default Button;
