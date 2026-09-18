"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stages = [
  {
    id: "preschool",
    category: "Preschool",
    classes: "Play Group · Nursery · Prep",
    title: "Preschool",
    tagline: "Joyful, Meaningful & Safe Beginnings",
    description:
      "The early years are the foundation of a child's educational journey — making first learning experiences joyful, meaningful, safe and memorable.",
    highlights: [
      "Early literacy & phonics",
      "Early numeracy & shapes",
      "Motor skills & coordination",
      "Confidence & social habits",
    ],
    image: "/hero1.jpg",
    imagePos: "object-center",
    badgeColor: "bg-[#d97706]",
  },
  {
    id: "primary",
    category: "Primary School",
    classes: "Classes 1–5",
    title: "Primary School",
    tagline: "Strong Foundations & Independent Learning",
    description:
      "Strong academic foundations alongside curiosity, confidence, discipline and independent learning that sparks a lifelong love for knowledge.",
    highlights: [
      "English language & communication",
      "Urdu proficiency & literature",
      "Mathematics & logical thinking",
      "Science & observational learning",
    ],
    image: "/slider4.JPG",
    imagePos: "object-top",
    badgeColor: "bg-[#001b44]",
  },
  {
    id: "middle",
    category: "Middle School",
    classes: "Classes 6–8",
    title: "Middle School",
    tagline: "Academic Responsibility & Critical Thinking",
    description:
      "Greater academic responsibility, developing the analytical skills, discipline, and conceptual depth required for secondary education.",
    highlights: [
      "Critical thinking & reasoning",
      "Effective study habits & routines",
      "Collaboration & team projects",
      "Advanced subject understanding",
    ],
    image: "/slider3.JPG",
    imagePos: "object-top",
    badgeColor: "bg-[#b88308]",
  },
  {
    id: "secondary",
    category: "Secondary School",
    classes: "Classes 9–10 (Matric)",
    title: "Secondary School",
    tagline: "Excellence, Board Exam Prep & Future Readiness",
    description:
      "Academic excellence, structured examination preparation, deep conceptual understanding and future career readiness for senior students.",
    highlights: [
      "Concept clarity in core sciences & arts",
      "Rigorous Board exam preparation",
      "Career awareness & guidance",
      "Leadership & moral responsibility",
    ],
    image: "/slider2.JPG",
    imagePos: "object-top",
    badgeColor: "bg-[#001b44]",
  },
];

export default function Programmes() {
  const [activeTab, setActiveTab] = useState(0);
  const activeStage = stages[activeTab];

  return (
    <section id="Programmes" className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex flex-col gap-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs tracking-wider uppercase">
          Continuous Educational Journey
        </div>
        <h2 className="h2 text-dark">
          Our Programmes: <span className="text-main">From Play Group to Matric</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
          A single continuous journey, structured into four stages so that every
          child is taught at the right level, at the right pace.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            onClick={() => setActiveTab(index)}
            className={`px-3.5 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
              activeTab === index
                ? "bg-[#001b44] text-white shadow-md font-semibold"
                : "text-grayD hover:text-dark hover:bg-white/60"
            }`}
          >
            {stage.category}
          </button>
        ))}
      </div>

      {/* Active Stage Detailed Card */}
      <motion.div
        key={activeStage.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-gradient-to-br from-[#f8fafc] to-[#eef4ff] border border-[#cbd5e1] rounded-3xl p-6 sm:p-10 shadow-sm"
      >
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-main text-white font-bold text-xs tracking-wide">
              {activeStage.classes}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Stage 0{activeTab + 1} of 04
            </span>
          </div>

          <h3 className="h2 text-dark !text-2xl sm:!text-4xl">
            {activeStage.title}
          </h3>
          <p className="text-main font-serif italic text-base sm:text-lg font-medium">
            {activeStage.tagline}
          </p>
          <p className="text-sm sm:text-base text-gray leading-relaxed">
            {activeStage.description}
          </p>

          <div className="pt-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-dark mb-3">
              Key Focus Areas & Subjects:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeStage.highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 text-dark text-xs sm:text-sm font-medium shadow-2xs"
                >
                  <span className="text-gold font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <Link href="/OnlineAdmission">
              <button className="px-6 py-3 rounded-xl bg-[#001b44] hover:bg-[#0a2558] text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2">
                <span>Enroll in {activeStage.category}</span>
                <span className="text-gold">→</span>
              </button>
            </Link>
            <Link href="/ContactUs">
              <button className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-dark font-medium text-sm border border-slate-300 transition-all">
                Inquire Details
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[440px] rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-[#001738]">
          <Image
            src={activeStage.image}
            alt={activeStage.title}
            fill
            className={`object-cover ${activeStage.imagePos || "object-top"}`}
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs uppercase tracking-widest text-[#d7a51b] font-bold">NEET School System</p>
            <p className="text-sm sm:text-base font-semibold">{activeStage.classes}</p>
          </div>
        </div>
      </motion.div>

      {/* Grid of all 4 stages for overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
        {stages.map((stage, idx) => (
          <div
            key={stage.id}
            onClick={() => setActiveTab(idx)}
            className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeTab === idx
                ? "bg-[#001b44] text-white border-[#001b44] shadow-md scale-[1.02]"
                : "bg-white text-dark border-slate-200 hover:border-gold/50 hover:shadow"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                  activeTab === idx ? "bg-white/20 text-gold" : "bg-slate-100 text-grayD"
                }`}>
                  {stage.classes}
                </span>
                <span className={`text-xs ${activeTab === idx ? "text-gold" : "text-slate-400"}`}>
                  0{idx + 1}
                </span>
              </div>
              <h4 className={`text-lg font-berlin font-bold mb-1 ${
                activeTab === idx ? "text-white" : "text-dark"
              }`}>
                {stage.title}
              </h4>
              <p className={`text-xs leading-relaxed line-clamp-3 ${
                activeTab === idx ? "text-white/80" : "text-gray"
              }`}>
                {stage.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-medium">
              <span className={activeTab === idx ? "text-gold" : "text-main"}>
                {activeTab === idx ? "Currently viewing" : "Click to view"}
              </span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
