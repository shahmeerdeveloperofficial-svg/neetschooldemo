"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaPenNib,
  FaCalculator,
  FaFlask,
  FaMosque,
  FaLaptopCode,
  FaGlobeAmericas,
  FaCheckCircle,
} from "react-icons/fa";

const subjects = [
  {
    title: "English",
    icon: <FaBook className="text-xl text-gold" />,
    desc: "Language development, reading, writing, grammar, vocabulary and communication.",
    color: "from-[#062319] to-[#0f4d36]",
  },
  {
    title: "Urdu",
    icon: <FaPenNib className="text-xl text-gold" />,
    desc: "Language proficiency, literature, reading, writing and expression.",
    color: "from-[#0f4d36] to-[#16654a]",
  },
  {
    title: "Mathematics",
    icon: <FaCalculator className="text-xl text-gold" />,
    desc: "Numeracy, reasoning, problem-solving, logical thinking and mathematical concepts.",
    color: "from-[#d97706] to-[#b45309]",
  },
  {
    title: "Science",
    icon: <FaFlask className="text-xl text-gold" />,
    desc: "Observation, inquiry, experimentation, understanding and practical application.",
    color: "from-[#0b3828] to-[#062319]",
  },
  {
    title: "Islamiat",
    icon: <FaMosque className="text-xl text-gold" />,
    desc: "Islamic knowledge, values, ethics, manners and character development.",
    color: "from-[#062319] to-[#0d3f2d]",
  },
  {
    title: "Computer Education",
    icon: <FaLaptopCode className="text-xl text-gold" />,
    desc: "Digital awareness and essential technology skills appropriate to each level.",
    color: "from-[#92400e] to-[#b45309]",
  },
  {
    title: "General Knowledge",
    icon: <FaGlobeAmericas className="text-xl text-gold" />,
    desc: "Awareness of the world, society, environment, culture and current learning themes.",
    color: "from-[#0f4d36] to-[#062319]",
  },
];

const skills21st = [
  { name: "Communication", desc: "Expressing thoughts clearly and listening actively." },
  { name: "Collaboration", desc: "Working constructively in diverse teams." },
  { name: "Critical Thinking", desc: "Analyzing information and questioning assumptions." },
  { name: "Creativity", desc: "Innovating and thinking beyond conventional boundaries." },
  { name: "Problem Solving", desc: "Finding structured solutions to real challenges." },
  { name: "Independent Learning", desc: "Developing self-drive, inquiry, and study habits." },
  { name: "Digital Awareness", desc: "Navigating technology safely and effectively." },
  { name: "Leadership", desc: "Guiding others with humility, vision, and responsibility." },
  { name: "Decision Making", desc: "Evaluating choices with wisdom and moral clarity." },
  { name: "Adaptability", desc: "Thriving in evolving environments and new situations." },
  { name: "Time Management", desc: "Organizing daily routines and setting priorities." },
  { name: "Confidence", desc: "Believing in one's unique abilities and voice." },
];

export default function CurriculumSkills() {
  return (
    <section id="Curriculum" className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex flex-col gap-12 sm:gap-16">
      {/* Curriculum Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs tracking-wider uppercase">
          Comprehensive Learning
        </div>
        <h2 className="h2 text-dark">
          Curriculum: <span className="text-main">Learning for Understanding</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
          Our curriculum builds strong foundations in core subjects while giving
          students room to communicate, create, question, collaborate and apply
          what they learn.
        </p>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {subjects.map((sub, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-gold/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
              i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#062319]/5 group-hover:bg-[#062319] transition-colors duration-300">
                  {sub.icon}
                </div>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-gold">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-berlin font-bold text-dark mb-2 group-hover:text-main transition-colors">
                {sub.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray leading-relaxed">
                {sub.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-main">
              <span>Core Subject</span>
              <span className="ml-auto">★</span>
            </div>
          </div>
        ))}
      </div>

      {/* 21st-Century Skills Banner & Grid */}
      <div className="rounded-3xl bg-gradient-to-br from-[#001b44] via-[#092556] to-[#00122e] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_20%,#d7a51b_0,transparent_50%)]"></div>

        <div className="relative z-10">
          <div className="max-w-3xl mb-8 sm:mb-10 space-y-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-gold uppercase">
              Learn Today. Lead Tomorrow.
            </span>
            <h3 className="font-berlin text-2xl sm:text-4xl text-white">
              21st-Century Skills at NEET
            </h3>
            <p className="text-xs sm:text-base text-white/85 leading-relaxed">
              We empower students with essential competencies needed to thrive in
              higher education, future careers, and responsible global
              citizenship.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skills21st.map((skill, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur border border-white/10 hover:border-gold/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-gold text-xs">◆</span>
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-gold transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/70 leading-normal">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
