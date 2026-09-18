"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Pipeline = () => {
  const Steps = [
    {
      title: "Our Philosophy",
      detail: [
        "At NEET School System, we believe every child deserves respectful guidance, thoughtful teaching, and a school atmosphere that feels safe, structured, and encouraging.",
        "We see education as a partnership between school and family, where values, discipline, and learning move together to help each child grow with confidence.",
      ],
    },
    {
      title: "Our Programme",
      detail: [
        "Our programme combines classroom learning with mentoring, activities, assessments, and regular communication with parents so students remain supported in every area.",
        "We encourage understanding over rote memorization and make room for participation, questioning, teamwork, and healthy routines that strengthen overall development.",
      ],
    },
    {
      title: "Our Curriculum",
      detail: [
        "Our curriculum is designed to strengthen English, Urdu, Mathematics, Science, Islamiat, and general knowledge through clear instruction, practice, and age-appropriate learning experiences.",
        "Alongside academics, we value reading, speaking, physical activity, and creative expression so students leave school more capable, disciplined, and prepared for future classes.",
      ],
    },
  ];

  const container = useRef();
  const progressLine = useRef();
  const progressRedLine = useRef();
  const iconsArray = useRef([]);
  const [isActive, setIsActive] = useState(-1);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      function setProgressHeight(prog) {
        if (progressRedLine.current && prog) {
          gsap.to(progressRedLine.current, {
            height: `${100 * prog}%`,
            duration: 0.1,
          });
        }
      }

      ScrollTrigger.create({
        trigger: container.current,
        start: `top 50%`,
        end: `bottom 60%`,
        animation: timeline,
        scrub: 1,
        onUpdate: (self) => {
          let progress = self.progress;
          let bottomPos = 0;
          setProgressHeight(progress);

          if (progressLine.current) {
            const progressLineT =
              progressLine.current.getBoundingClientRect().top;

            const progressLineH =
              progressLine.current.getBoundingClientRect().height * progress;

            bottomPos = progressLineH + progressLineT;
            if (iconsArray.current) {
              iconsArray.current.forEach((iconRef, index) => {
                if (iconRef) {
                  const topPos = iconRef.getBoundingClientRect().top;
                  if (bottomPos > topPos && index > isActive) {
                    setIsActive(index);
                  }
                }
              });
            }
          }
        },
      });
    },
    { scope: container, dependencies: [isActive] }
  );

  return (
    <section
      id="Timeline"
      ref={container}
      className="maxWSec flex flex-col lg:flex-row py-4 sm:py-8"
    >
      <div className="w-full lg:w-fit flex-shrink-0 px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-12 relative">
        <div className="sticky top-28 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="h2 w-fit">
            NEET School <br className="hidden lg:block" />
            <span>
              <small className="text-[.5em]">in</small>{" "}
              <span className="text-main">Gujranwala</span>
            </span>
          </h2>
        </div>
      </div>

      <div className="flex-grow flex px-2 sm:px-4 lg:px-0">
        <div className="w-8 sm:w-12 flex-shrink-0 py-4 lg:py-12 flex justify-center">
          <div
            ref={progressLine}
            className="relative w-1 rounded-lg bg-grayL my-1 overflow-hidden"
          >
            <div
              ref={progressRedLine}
              className="absolute w-full left-0 top-0 bg-main"
            ></div>
          </div>
        </div>

        <div className="flex-grow p-3 sm:p-6 lg:p-12 flex flex-col gap-8 sm:gap-16">
          {Steps.map((item, i) => {
            return (
              <div key={i} className="relative">
                <div
                  ref={(el) => (iconsArray.current[i] = el)}
                  className={`w-4 sm:w-5 aspect-square z-10 absolute -left-[1.35rem] sm:-left-[1.85rem] lg:-left-[3.75rem] -translate-x-1/2 top-1.5 sm:top-1 bg-main border-solid rounded-full flex justify-center items-center flex-col transition-all duration-200 ${
                    isActive >= i && isActive !== -1
                      ? "border-mainD border-4 scale-125"
                      : "border-transparent border-4"
                  }`}
                ></div>

                <div className="flex">
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <h3 className="h3 w-full">{item.title}</h3>
                    <div className="text-gray space-y-2 sm:space-y-3 text-sm sm:text-lg leading-relaxed w-full">
                      {item.detail.map((detailText, detailIndex) => {
                        return (
                          <p className="block" key={detailIndex}>
                            {detailText}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
