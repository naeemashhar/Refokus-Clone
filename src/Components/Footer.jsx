import React from "react";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto py-5 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-medium leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 ">
          <div className="basis-1/3">
            <h4 className="mb-8 text-zinc-500 hover:scale-110 transition-all duration-300">Socials</h4>
            {["Instagram","xCorp","LinkedIn"].map((item,index) => <a key={index} className="block mt-1 text-zinc-600 hover:scale-110 transition-all duration-300">{item}</a>)}
          </div>

          <div className="basis-1/3">
            <h4 className="mb-8 text-zinc-500 hover:scale-110 transition-all duration-300">Sitemap</h4>
            {["Home","Work","Career","Contact"].map((item,index) => <a key={index} className="block mt-1 text-zinc-300 hover:scale-110 transition-all duration-300">{item}</a>)}
          </div>
          
          <div className="basis-1/2 flex flex-col items-end">
            <p className="mt-1 font-medium text-right">Refokus is pioneering digital agency driven by design and
              empowered by technology.</p>
            <img className="w-32 mt-13 hover:scale-110 transition-all duration-300" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
