import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import {
  FaBook,
  FaPenNib,
  FaCalculator,
  FaFlask,
  FaMosque,
  FaLaptopCode,
  FaGlobeAmericas,
  FaBrain,
  FaChalkboardTeacher,
  FaClipboardCheck,
} from "react-icons/fa";

const subjects = [
  {
    title: "English Language & Literature",
    icon: <FaBook className="text-xl text-gold" />,
    desc: "Comprehensive phonics, reading comprehension, grammar mastery, creative writing, and public speaking confidence.",
  },
  {
    title: "Urdu Language & Adab",
    icon: <FaPenNib className="text-xl text-gold" />,
    desc: "National language fluency, classical & modern literature, correct pronunciation (talaffuz), and expressive writing.",
  },
  {
    title: "Mathematics & Logic",
    icon: <FaCalculator className="text-xl text-gold" />,
    desc: "Concept-driven numeracy, algebra, geometry, word problems, and real-world mathematical applications.",
  },
  {
    title: "General & Core Sciences",
    icon: <FaFlask className="text-xl text-gold" />,
    desc: "Inquiry-based Physics, Chemistry, and Biology with hands-on experiments, scientific inquiry, and observations.",
  },
  {
    title: "Islamiat & Moral Education",
    icon: <FaMosque className="text-xl text-gold" />,
    desc: "Quranic teachings, Seerah of Prophet Muhammad (PBUH), daily Islamic etiquettes, ethics, and character formation.",
  },
  {
    title: "Computer Education & IT",
    icon: <FaLaptopCode className="text-xl text-gold" />,
    desc: "Digital literacy, keyboard skills, office productivity tools, computer fundamentals, and introductory coding.",
  },
  {
    title: "Social Studies & Pak Studies",
    icon: <FaGlobeAmericas className="text-xl text-gold" />,
    desc: "Geographical awareness, Pakistan's history & heritage, civic responsibility, and global perspectives.",
  },
];

const pillars = [
  {
    title: "Concept-Based Learning",
    desc: "We focus on deep understanding and application rather than superficial rote memorization.",
    icon: <FaBrain className="text-2xl text-gold" />,
  },
  {
    title: "Active Classroom Dialogue",
    desc: "Students are encouraged to question, participate, and express viewpoints with confidence.",
    icon: <FaChalkboardTeacher className="text-2xl text-gold" />,
  },
  {
    title: "Continuous Assessment",
    desc: "Regular tests, quizzes, and constructive feedback that identify strengths and areas for growth.",
    icon: <FaClipboardCheck className="text-2xl text-gold" />,
  },
];

const skills = [
  "Communication & Presentation",
  "Critical Thinking & Inquiry",
  "Collaboration & Teamwork",
  "Creativity & Innovation",
  "Structured Problem Solving",
  "Independent Study Habits",
  "Digital Literacy & Safety",
  "Ethical Decision Making",
  "Adaptability & Resilience",
  "Time Management & Focus",
  "Self-Confidence & Initiative",
  "Social & Civic Responsibility",
];

export default function CurriculumPage() {
  return (
    <main className="bg-white text-dark">
      <HeroHeader
        title={"Curriculum & Methodology"}
        subtitle="Learning for Real Understanding"
        tagline="Where Knowledge Meets Application"
        description="Our curriculum is carefully structured to build rigorous academic foundations in core subjects while fostering 21st-century critical thinking, creativity, and moral character."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-16">
        {/* Core Methodology */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs uppercase tracking-wider">
              Educational Framework
            </div>
            <h2 className="h2 text-dark">
              How We <span className="text-main">Teach &amp; Assess</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
              At NEET School System, curriculum delivery goes beyond textbooks. We
              ensure every child grasps core concepts and learns to apply them in
              practical situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#001b44] to-[#0a275e] text-white border border-white/10 shadow-lg space-y-4"
              >
                <div className="p-3 rounded-xl bg-white/10 w-fit">
                  {item.icon}
                </div>
                <h3 className="font-berlin text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Academic Subjects */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="font-berlin text-2xl sm:text-4xl text-dark">
              Core Academic Subjects
            </h3>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              Comprehensive subject syllabi aligned with national curriculum standards
              and enriched with modern learning resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {subjects.map((sub, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-gold/60 hover:shadow-lg transition-all flex flex-col justify-between group ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#001b44]/5 group-hover:bg-[#001b44] transition-colors">
                      {sub.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-gold">
                      0{i + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-berlin font-bold text-dark mb-2 group-hover:text-main transition-colors">
                    {sub.title}
                  </h4>
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
        </div>

        {/* 21st-Century Skills Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#001b44] via-[#092556] to-[#00122e] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#d7a51b_0,transparent_45%)]"></div>

          <div className="relative z-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold uppercase">
                Future-Ready Competencies
              </span>
              <h3 className="font-berlin text-2xl sm:text-4xl text-white">
                21st-Century Skills Integrated in Everyday Classes
              </h3>
              <p className="text-xs sm:text-base text-white/85 leading-relaxed">
                Beyond textbooks, we build practical competencies that enable
                students to think critically, collaborate productively, and lead
                with integrity.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur border border-white/10 hover:border-gold/40 transition-all flex items-center gap-2.5"
                >
                  <span className="text-gold text-xs">◆</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="font-berlin text-2xl sm:text-3xl text-dark">
            Ready to Experience the NEET Curriculum?
          </h3>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/OnlineAdmission">
              <button className="px-8 py-3.5 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm sm:text-base shadow-md transition-all active:scale-95">
                Apply for Admission →
              </button>
            </Link>
            <Link href="/Academics">
              <button className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-dark font-semibold text-sm sm:text-base transition-all">
                View Academic Stages
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
