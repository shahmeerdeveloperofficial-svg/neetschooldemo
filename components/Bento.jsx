"use client";

import React from "react";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaShieldAlt,
  FaLightbulb,
  FaComments,
  FaAward,
  FaUsers,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

const Bento = () => {
  const priorities = [
    {
      title: "Academic Excellence",
      desc: "Concept-based learning that builds real understanding, not memorization for its own sake.",
      icon: <FaBookOpen className="text-2xl text-gold" />,
      tag: "Academics",
    },
    {
      title: "Character & Discipline",
      desc: "Islamic and moral values woven into daily school life, alongside habits of punctuality and self-control.",
      icon: <FaShieldAlt className="text-2xl text-gold" />,
      tag: "Character",
    },
    {
      title: "Creativity & Critical Thinking",
      desc: "Room for students to question, explore ideas and express themselves with confidence.",
      icon: <FaLightbulb className="text-2xl text-gold" />,
      tag: "Innovation",
    },
    {
      title: "Communication & Confidence",
      desc: "Skills built through participation, presentation and everyday classroom dialogue.",
      icon: <FaComments className="text-2xl text-gold" />,
      tag: "Expression",
    },
    {
      title: "Leadership Development",
      desc: "Opportunities to take initiative, work in teams and make responsible decisions.",
      icon: <FaAward className="text-2xl text-gold" />,
      tag: "Leadership",
    },
    {
      title: "Physical Activity & Parent Partnership",
      desc: "Co-curricular life and an ongoing relationship between school and home.",
      icon: <FaUsers className="text-2xl text-gold" />,
      tag: "Community",
    },
  ];

  return (
    <section
      id="Welcome"
      className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex gap-10 sm:gap-14 flex-col"
    >
      {/* Welcome Intro */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sec/10 text-sec font-semibold text-xs sm:text-sm tracking-wider uppercase">
          Welcome to NEET School System
        </div>
        <h2 className="h2 text-dark">
          Where Learning Becomes <span className="text-main">Leadership</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray leading-relaxed font-normal">
          At NEET School System, we believe that education is more than academic
          achievement — it is the process of developing confident, responsible,
          disciplined, creative and principled individuals who are prepared to
          contribute positively to society.
        </p>
        <p className="text-sm sm:text-base text-grayD/80 max-w-3xl mx-auto leading-relaxed">
          Our school provides a safe, respectful, stimulating and supportive
          environment where every child is encouraged to learn, explore,
          participate and grow. We combine quality academic instruction with
          character building, Islamic values, creativity, critical thinking,
          communication skills, physical activity and leadership development.
        </p>
      </div>

      {/* Vision, Mission & Philosophy Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Core Philosophy */}
        <div className="group/card p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#001b44] to-[#0a2558] text-light relative overflow-hidden shadow-xl border border-white/10 flex flex-col justify-between">
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-white/10 text-gold text-xl">
                ★
              </span>
              <h3 className="font-berlin text-2xl text-white">Core Philosophy</h3>
            </div>
            <p className="text-gold font-medium text-sm sm:text-base italic">
              &ldquo;Knowledge · Character · Discipline · Creativity · Leadership · Excellence&rdquo;
            </p>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              At NEET School System, we believe true education develops both
              competence and character. We prepare students not just to pass exams,
              but to lead purposeful lives.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
            <span>Play Group to Matric</span>
            <span className="text-gold">Gujranwala</span>
          </div>
        </div>

        {/* Vision */}
        <div className="group/card p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#d7a51b] via-[#b88308] to-[#8c6204] text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
          <Image
            src="/spark.svg"
            width="400"
            height="400"
            alt="spark"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-44 translate-x-[15%] translate-y-[15%] opacity-15 pointer-events-none"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-white/20 text-white text-xl">
                <FaEye />
              </span>
              <h3 className="font-berlin text-2xl text-white">Our Vision</h3>
            </div>
            <blockquote className="text-sm sm:text-base text-white/95 leading-relaxed font-normal italic border-l-2 border-white/40 pl-3">
              &ldquo;To become a leading centre of educational excellence that
              nurtures confident, principled, innovative and future-ready
              learners who lead with knowledge, character, discipline and
              purpose.&rdquo;
            </blockquote>
          </div>
          <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/90">
            <span>Future-Ready Learners</span>
            <span>Educational Excellence</span>
          </div>
        </div>

        {/* Mission */}
        <div className="group/card p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#001b44] to-[#0d2a60] text-light relative overflow-hidden shadow-xl border border-white/10 flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <Image
            src="/book.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-44 translate-x-[15%] translate-y-[15%] opacity-15 pointer-events-none"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-white/10 text-gold text-xl">
                <FaBullseye />
              </span>
              <h3 className="font-berlin text-2xl text-white">Our Mission</h3>
            </div>
            <blockquote className="text-sm sm:text-base text-white/90 leading-relaxed font-normal italic border-l-2 border-gold/60 pl-3">
              &ldquo;To provide a stimulating and inclusive learning environment
              where every student is empowered through quality education,
              strong character building, creativity, critical thinking and
              leadership — preparing them to succeed in a changing world.&rdquo;
            </blockquote>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
            <span>Inclusive & Stimulating</span>
            <span className="text-gold">Whole-Child Growth</span>
          </div>
        </div>
      </div>

      {/* About Section Header & Educational Priorities */}
      <div className="pt-6 sm:pt-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs tracking-wider uppercase">
            NEET — A New Era of Educational Transformation
          </div>
          <h2 className="h2">
            Our Educational <span className="text-main">Priorities</span>
          </h2>
          <p className="text-sm sm:text-base text-gray leading-relaxed">
            Our approach focuses on developing the whole child — academically,
            morally, socially, emotionally and physically. Every child has unique
            potential, and we provide the right environment for it to flourish.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-gold/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-sec/5 group-hover:bg-sec group-hover:text-gold transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-grayD">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-berlin font-bold text-dark mb-2 group-hover:text-main transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-medium text-main">
                <span>Core Priority</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  ★
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bento;
