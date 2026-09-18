"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaCheckCircle,
  FaAward,
  FaChalkboardTeacher,
} from "react-icons/fa";

const priorities = [
  "Academic Excellence",
  "Educational Quality",
  "Student Discipline",
  "Character Development",
  "Teacher Development",
  "Safe Learning Environment",
  "Parent Partnership",
  "Continuous Improvement",
];

const teacherValues = [
  "Understand individual student needs",
  "Explain concepts clearly & patiently",
  "Encourage active questions & curiosity",
  "Build lasting student confidence",
  "Maintain positive, respectful discipline",
  "Promote equal classroom participation",
  "Provide constructive & timely feedback",
  "Encourage creativity & original thought",
  "Work closely with parents",
  "Inspire students to keep learning",
];

export default function LeadershipSection() {
  return (
    <section id="Leadership" className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex flex-col gap-14 sm:gap-20">
      {/* Principal & Leadership Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Column: Image & Badges */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#001b44] to-[#0a2558]">
            <Image
              src="/director.webp"
              alt="Sir Mujahid Ali Ansari - Chairman & Principal"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="inline-block px-3 py-1 rounded-md bg-gold text-dark font-bold text-xs mb-1">
                MA · 21 Years as Principal
              </div>
              <h3 className="font-berlin text-xl sm:text-2xl text-white font-bold leading-tight">
                Sir Mujahid Ali Ansari
              </h3>
              <p className="text-xs sm:text-sm text-gold">Chairman & Principal</p>
            </div>
          </div>
        </div>

        {/* Right Column: Leadership Vision & Priorities */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs tracking-wider uppercase">
              School Leadership
            </div>
            <h2 className="h2 text-dark">
              Leadership with <span className="text-main">Experience & Purpose</span>
            </h2>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#001b44]/5 border border-[#001b44]/10 space-y-2">
            <p className="text-sm sm:text-base md:text-lg text-dark font-semibold">
              Sir Mujahid Ali Ansari <span className="text-main font-normal">(MA)</span>
            </p>
            <p className="text-xs sm:text-sm font-bold text-gold uppercase tracking-wider">
              21 Years of Experience as Principal
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray leading-relaxed">
              With extensive experience in education and school leadership, the
              Chairman & Principal provides academic direction focused on
              educational quality, discipline, character development and
              student success.
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-bold text-dark uppercase tracking-wider mb-3 flex items-center gap-2">
              <FaAward className="text-gold" />
              <span>Leadership Priorities</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
              {priorities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-dark shadow-2xs"
                >
                  <span className="text-main font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link href="/ChairmanMessage">
              <button className="px-6 py-3 rounded-xl bg-[#001b44] hover:bg-[#0a2558] text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2">
                <span>Read Full Chairman Message</span>
                <span className="text-gold">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Our Teachers Section */}
      <div className="rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#eef4ff] border border-[#cbd5e1] p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="max-w-3xl mb-8 space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001b44] text-gold font-bold text-xs uppercase tracking-wider">
            Our Teachers
          </div>
          <h3 className="font-berlin text-2xl sm:text-4xl text-dark">
            Dedicated Teachers. <span className="text-main">Inspired Learners.</span>
          </h3>
          <p className="text-xs sm:text-base text-gray leading-relaxed">
            Our teachers play a central role in creating an environment where
            students can learn with confidence. We value teachers who:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {teacherValues.map((val, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-gold/50 transition-all flex items-start gap-3"
            >
              <FaChalkboardTeacher className="text-gold text-lg flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-dark leading-snug">
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
