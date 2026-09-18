"use client";

import React, { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "School Leadership",
    title: "Academic guidance and school direction",
    description:
      "Our leadership team works to maintain discipline, educational quality, and a safe learning environment for every student.",
  },
  {
    name: "Administration",
    title: "Student support and parent coordination",
    description:
      "The administrative team helps families with admissions, communication, scheduling, and day-to-day school coordination.",
  },
  {
    name: "Teaching Team",
    title: "Dedicated classroom mentorship",
    description:
      "Our teachers focus on concept clarity, values, confidence building, and the personal progress of each learner.",
  },
];

export default function Team() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      slider.scrollLeft += 1;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Team"
      className="maxWSec px-4 sm:px-8 md:px-12 py-8 sm:py-12 flex flex-col gap-8 sm:gap-12"
    >
      <h2 className="h2 text-center">
        Meet the <span className="text-main">Leadership</span>
      </h2>

      <div ref={sliderRef} className="w-full overflow-x-hidden">
        <div className="flex gap-4 sm:gap-8 w-max py-2">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[340px] flex flex-col items-center gap-4"
            >
              <div className="h-[25rem] sm:h-[29rem] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sec via-[#232d6a] to-main p-5 sm:p-8 text-light flex flex-col justify-end">
                <div className="rounded-xl sm:rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-4 sm:p-6">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70">
                    NEET School System
                  </p>
                  <h4 className="font-berlin text-2xl sm:text-3xl leading-tight mt-2 sm:mt-3">
                    {member.name}
                  </h4>
                  <p className="text-sm sm:text-base text-white/90 mt-2 sm:mt-3">
                    {member.description}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-base sm:text-lg">{member.name}</h4>
                <p className="text-xs sm:text-sm text-gray">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
