"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const HeroHeader = ({
  title = (
    <>
      NEET School <br /> System
    </>
  ),
  subtitle = "Admissions open for Play Group to Matric",
  tagline = "Learn today. Lead tomorrow.",
  description = "NEET School System nurtures knowledge, character, discipline, creativity and leadership in every student — from their first day of Play Group to their final year of Matric, here in Gujranwala.",
}) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`p-2.5 sm:p-4 md:p-6 flex ${
        isHomePage
          ? "min-h-[620px] sm:min-h-[680px] md:min-h-[720px]"
          : "min-h-[360px] sm:min-h-[420px]"
      }`}
    >
      <div className="bg-gradient-to-br from-[#001b44] via-[#092556] to-[#00122e] flex relative flex-1 rounded-2xl sm:rounded-3xl overflow-hidden maxW border border-white/10 shadow-2xl">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#d7a51b_0,transparent_40%),radial-gradient(circle_at_85%_85%,#174b83_0,transparent_45%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative text-light z-10 flex-1 flex flex-col items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-12 sm:py-16">
          {/* Admissions Badge */}
          {isHomePage && (
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold/40 backdrop-blur text-gold font-medium text-xs sm:text-sm tracking-wide"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span>{subtitle}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 0.8,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            style={{ textShadow: "0 0 1.5rem rgba(0,0,0,0.5)" }}
            className="h1 text-center text-white tracking-tight"
          >
            {title}
          </motion.h1>

          {isHomePage && tagline && (
            <motion.p
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-serif italic text-gold text-lg sm:text-2xl md:text-3xl font-normal text-center"
            >
              &ldquo;{tagline}&rdquo;
            </motion.p>
          )}

          {description && (
            <motion.h4
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.45,
                  duration: 0.8,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              style={{ textShadow: "0 0 .5rem rgba(0,0,0,0.4)" }}
              className="text-center max-w-[min(65ch,92%)] leading-relaxed text-xs sm:text-base md:text-lg text-white/90 px-2"
            >
              {description}
            </motion.h4>
          )}

          {isHomePage && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center mt-3 pt-2"
            >
              <Link href="/OnlineAdmission">
                <button className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm sm:text-base shadow-lg hover:shadow-gold/30 transition-all duration-200 active:scale-95 flex items-center gap-2">
                  <span>Apply for Admission</span>
                  <span>→</span>
                </button>
              </Link>
              <a href="#Welcome">
                <button className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur transition-all duration-200 active:scale-95">
                  Explore Our School
                </button>
              </a>
            </motion.div>
          )}

          {isHomePage && <Sections />}
        </div>
      </div>
    </header>
  );
};

const Sections = () => {
  const sections = [
    {
      title: "About",
      icon: "/icons/About.svg",
      link: "#About",
      bg: "bg-[#d7a51b]",
      hoverBg: "hover:bg-[#b88308]",
      shadow: "shadow-amber-500/30",
    },
    {
      title: "Journey",
      icon: "/icons/Timeline.svg",
      link: "#Programmes",
      bg: "bg-[#0284c7]",
      hoverBg: "hover:bg-[#0369a1]",
      shadow: "shadow-sky-500/30",
    },
    {
      title: "Student Life",
      icon: "/icons/Curriculum.svg",
      link: "#StudentLife",
      bg: "bg-[#059669]",
      hoverBg: "hover:bg-[#047857]",
      shadow: "shadow-emerald-500/30",
    },
    {
      title: "Admissions",
      icon: "/icons/LMS.svg",
      link: "#Admissions",
      bg: "bg-[#e11d48]",
      hoverBg: "hover:bg-[#be123c]",
      shadow: "shadow-rose-500/30",
    },
    {
      title: "Contact",
      icon: "/icons/Contact.svg",
      link: "#Footer",
      bg: "bg-[#6366f1]",
      hoverBg: "hover:bg-[#4f46e5]",
      shadow: "shadow-indigo-500/30",
    },
  ];

  const handleSectionClick = (link) => {
    if (link.startsWith("#")) {
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.8,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="absolute h-10 sm:h-16 px-2 sm:px-5 rounded-t-2xl flex items-center bottom-0 left-1/2 -translate-x-1/2 bg-light text-dark shadow-sm max-w-[95vw]"
    >
      <div className="z-[-1] rotate-90 absolute bottom-0 left-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>
      <div className="z-[-1] absolute bottom-0 right-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>

      {sections.map((item, index) => {
        return (
          <div
            key={index}
            className="group relative w-11 xs:w-12 sm:w-20 md:w-24 h-full cursor-pointer flex justify-center"
            onClick={() => handleSectionClick(item.link)}
          >
            <div className={`w-9 xs:w-10 sm:w-14 md:w-16 -top-4 xs:-top-5 sm:-top-7 md:-top-8 aspect-square ${item.bg} ${item.hoverBg} ${item.shadow} shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 left-1/2 -translate-x-1/2 absolute flex items-center justify-center rounded-full border-2 border-white/20`}>
              <Image
                src={item.icon}
                width={300}
                height={300}
                alt={item.title}
                priority
                className="w-[55%]"
              />
            </div>
            <div className="max-sm:hidden whitespace-nowrap absolute top-10 w-full text-center text-xs md:text-sm font-medium text-dark leading-tight">
              {item.title}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default HeroHeader;
