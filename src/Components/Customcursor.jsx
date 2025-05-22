import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringBlackText, setHoveringBlackText] = useState(false);

  useEffect(() => {
    
    const moveCursor = (e) => { // Update cursor position on mouse move
      setPosition({ x: e.clientX, y: e.clientY });
    };


    const handleMouseOver = (e) => {
      const el = e.target.closest(".text-black");
      if (el) setHoveringBlackText(true);
    };

    const handleMouseOut = (e) => {
      const el = e.target.closest(".text-black");
      if (el) setHoveringBlackText(false);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference transition-all duration-200 ease-out"
      style={{
        transform: `translate3d(${position.x - 15}px, ${position.y - 15}px, 0)`,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: hoveringBlackText ? "white" : "black",
        border: "12px solid white",
        opacity: 0.9,
      }}
    ></div>
  );
};

export default CustomCursor;
