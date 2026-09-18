"use client";

import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaFileAlt,
  FaUserCheck,
  FaComments,
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    num: "01",
    title: "Enquiry",
    desc: "Contact the school for comprehensive information about classes, curriculum, and admissions.",
    icon: <FaPhoneAlt className="text-gold" />,
  },
  {
    num: "02",
    title: "Registration",
    desc: "Complete the official admission and student registration form online or at the school campus.",
    icon: <FaFileAlt className="text-gold" />,
  },
  {
    num: "03",
    title: "Student Assessment",
    desc: "Where applicable, the student undergoes an age- or class-appropriate diagnostic assessment.",
    icon: <FaUserCheck className="text-gold" />,
  },
  {
    num: "04",
    title: "Parent Guidance",
    desc: "Parents receive key information regarding programmes, campus routines, and school policies.",
    icon: <FaComments className="text-gold" />,
  },
  {
    num: "05",
    title: "Admission Confirmation",
    desc: "Complete required documentation and formalities to welcome your child to NEET School System.",
    icon: <FaGraduationCap className="text-gold" />,
  },
];

const careerPillars = [
  "Teaching & Classroom Instruction",
  "Student Development & Mentorship",
  "Character Building & Ethics",
  "Innovative Educational Practices",
  "Continuous Professional Growth",
  "Teamwork & School Leadership",
];

export default function AdmissionSteps() {
  return (
    <section id="Admissions" className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex flex-col gap-14 sm:gap-20">
      {/* Admissions 5-Step Process */}
      <div className="flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs tracking-wider uppercase">
            Admissions Open · Play Group to Matric
          </div>
          <h2 className="h2 text-dark">
            How to <span className="text-main">Apply for Admission</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
            Give your child an educational journey built on knowledge, character,
            discipline, creativity and leadership.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-gold/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#001b44] text-white">
                    {step.icon}
                  </div>
                  <span className="font-berlin text-2xl font-bold text-slate-300 group-hover:text-gold transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-berlin font-bold text-dark mb-2 group-hover:text-main transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-main">
                <span>Step {step.num}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Admissions CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#001b44] via-[#0a275e] to-[#001b44] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-gold uppercase">
              Admissions Open · Gujranwala
            </span>
            <h3 className="font-berlin text-2xl sm:text-4xl text-white">
              Your Child&apos;s Future Begins Today.
            </h3>
            <p className="text-xs sm:text-base text-white/85 leading-relaxed">
              Choose an environment where your child can learn with confidence,
              grow with character and lead with purpose.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/OnlineAdmission">
              <button className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95 flex items-center gap-2">
                <span>Apply Today</span>
                <FaArrowRight />
              </button>
            </Link>
            <a href="tel:+923007441617">
              <button className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur transition-all">
                Call: 0300-7441617
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div id="Careers" className="rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#eef4ff] border border-[#cbd5e1] p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001b44] text-gold font-bold text-xs uppercase tracking-wider">
              Careers
            </div>
            <h3 className="font-berlin text-2xl sm:text-4xl text-dark">
              Join the <span className="text-main">NEET School System</span> Team
            </h3>
            <p className="text-xs sm:text-base text-gray leading-relaxed">
              We believe great schools are built by committed, capable and caring
              educators. Become part of our educational journey — submit your CV
              to apply for a position.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/Careers">
                <button className="px-6 py-3 rounded-xl bg-[#001b44] hover:bg-[#0a2558] text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2">
                  <FaBriefcase className="text-gold" />
                  <span>Submit Your CV</span>
                </button>
              </Link>
              <Link href="/ContactUs">
                <button className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-dark font-medium text-sm border border-slate-300 transition-all">
                  Contact HR
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-dark mb-3">
              We welcome applications from professionals passionate about:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {careerPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-dark shadow-2xs"
                >
                  <span className="text-gold font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
