"use client";

import dynamic from "next/dynamic";
import React from "react";

const MatterBlocks = dynamic(() => import("./ui/MatterBlocks"), {
  ssr: false,
});

const Dragables = () => {
  const labels = [
    {
      title: "PG–Matric",
      sub: "Gujranwala Campus",
      custom: "text-light bg-dark border-light",
    },
    {
      title: "21+",
      sub: "Years Leadership",
      custom: "text-light bg-main border-main",
    },
    {
      title: "100%",
      sub: "Student Care",
      custom: "text-light bg-sec border-main",
    },
  ];

  return (
    <div className="maxWSec select-none h-[24rem] sm:h-[30rem] w-full flex relative overflow-hidden">
      <div className="flex-1 max-sm:pointer-events-none flex relative">
        <div className="flex-1 relative z-10 overflow-hidden">
          <MatterBlocks>
            {labels.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${item.custom} left-[-100vw] top-[-100vh] rounded-[1.5rem] sm:rounded-[3rem] absolute h-20 sm:h-32 md:h-44 w-[8.5rem] sm:w-[14rem] md:w-[18rem] flex-1 flex flex-col justify-center items-center cursor-grab z-20 dragableLabels pointer-events-none p-2`}
                >
                  <h2 className="text-2xl sm:text-4xl md:text-6xl font-berlin font-bold text-center leading-none">{item.title}</h2>
                  <p className="text-xs sm:text-base md:text-xl leading-tight text-center mt-1">
                    {item.sub}
                  </p>
                </div>
              );
            })}
            {Array.from({ length: 20 }).map((_, index) => {
              const classes = (() => {
                switch (index % 3) {
                  case 0:
                    return "bg-sec border-main";
                  case 1:
                    return "bg-main border-sec";
                  case 2:
                    return "bg-dark border-light";
                  default:
                    return "";
                }
              })();

              return (
                <div
                  key={index}
                  className={`${classes} left-[-100vw] top-[-100vh] rounded-[1rem] sm:rounded-[1.5rem] h-8 w-8 sm:h-12 sm:w-12 absolute cursor-grab z-20 dragableLabels pointer-events-none`}
                ></div>
              );
            })}
          </MatterBlocks>
        </div>
      </div>
    </div>
  );
};

export default Dragables;
