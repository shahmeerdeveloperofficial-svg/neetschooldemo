import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const stages = [
  {
    id: "preschool",
    tag: "Stage 01",
    name: "Preschool & Early Years",
    classes: "Play Group · Nursery · Prep",
    age: "Ages 3 – 5 Years",
    tagline: "Joyful, Safe & Concept-Based Beginnings",
    desc: "The early years lay the fundamental cornerstone of a child's educational journey. At NEET, preschool learning is vibrant, hands-on, and nurturing.",
    highlights: [
      "Early phonics & English / Urdu vocabulary",
      "Numeracy, counting & basic geometric shapes",
      "Fine & gross motor skill development",
      "Social interaction, sharing & self-confidence",
      "Activity-based sensory & creative play",
      "Islamic etiquettes, greetings & manners",
    ],
    image: "/hero1.jpg",
    imagePos: "object-center",
  },
  {
    id: "primary",
    tag: "Stage 02",
    name: "Primary School",
    classes: "Classes 1 to 5",
    age: "Ages 5 – 10 Years",
    tagline: "Strong Foundational Literacy, Numeracy & Curiosity",
    desc: "Primary education at NEET builds solid academic ground in core subjects while cultivating active curiosity, discipline, and independent study habits.",
    highlights: [
      "Concept-based Mathematics & problem solving",
      "Fluent English reading, grammar & creative writing",
      "Urdu literature, comprehension & expression",
      "General Science & observational experiments",
      "Computer literacy & fundamental digital skills",
      "Moral education, discipline & character building",
    ],
    image: "/slider4.JPG",
    imagePos: "object-top",
  },
  {
    id: "middle",
    tag: "Stage 03",
    name: "Middle School",
    classes: "Classes 6 to 8",
    age: "Ages 11 – 13 Years",
    tagline: "Analytical Thinking, Subject Depth & Responsibility",
    desc: "Middle school bridges childhood learning with secondary rigor. Students develop analytical capabilities, structured study routines, and collaboration.",
    highlights: [
      "Integrated Sciences (Physics, Chemistry, Biology foundations)",
      "Advanced Algebraic & Geometric Mathematics",
      "Critical thinking, essays & debate participation",
      "Computer applications, logic & coding basics",
      "Social studies, history & geography awareness",
      "Leadership roles in school clubs & house system",
    ],
    image: "/slider3.JPG",
    imagePos: "object-top",
  },
  {
    id: "secondary",
    tag: "Stage 04",
    name: "Secondary / Matriculation",
    classes: "Classes 9 & 10 (BISE Matric)",
    age: "Ages 14 – 16 Years",
    tagline: "Board Exam Excellence, Lab Mastery & Future Readiness",
    desc: "Our Matric programme equips senior students with rigorous Board preparation, conceptual clarity in science & computer streams, and career direction.",
    highlights: [
      "BISE Gujranwala Board Exam syllabus mastery",
      "Hands-on Physics, Chemistry, Biology & Computer Labs",
      "Regular test sessions, past papers & mock examinations",
      "Targeted revision & individualized teacher mentoring",
      "Career counselling & higher secondary roadmaps",
      "Prefect council, leadership & public presentation",
    ],
    image: "/slider2.JPG",
    imagePos: "object-top",
  },
];

export default function AcademicsPage() {
  return (
    <main className="bg-white text-dark">
      <HeroHeader
        title={"Academic Programmes"}
        subtitle="Play Group to Matric · Gujranwala Campus"
        tagline="Continuous Educational Excellence at Every Stage"
        description="A coherent, 4-stage academic progression ensuring that every student is taught with the right methodology, personal attention, and conceptual clarity."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-16">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-main/10 text-main font-bold text-xs uppercase tracking-wider">
            Academic Structure
          </div>
          <h2 className="h2 text-dark">
            Our 4-Stage <span className="text-main">Learning Journey</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
            From their first day of Play Group to their final Matric examination,
            NEET School System provides a seamless progression designed to build
            intellectual competence, moral character, and lifelong confidence.
          </p>
        </div>

        {/* 4 Stages Detailed Cards */}
        <div className="space-y-12">
          {stages.map((stage) => (
            <div
              key={stage.id}
              id={stage.id}
              className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#eef4ff] border border-[#cbd5e1] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#001b44] text-gold font-bold text-xs">
                    {stage.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-main/10 text-main font-semibold text-xs">
                    {stage.classes}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {stage.age}
                  </span>
                </div>

                <h3 className="h2 !text-2xl sm:!text-3xl text-dark">
                  {stage.name}
                </h3>
                <p className="text-main font-serif italic text-base sm:text-lg font-medium">
                  &ldquo;{stage.tagline}&rdquo;
                </p>
                <p className="text-sm sm:text-base text-gray leading-relaxed">
                  {stage.desc}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-dark mb-3">
                    Key Focus &amp; Curriculum Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {stage.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 text-dark text-xs sm:text-sm font-medium shadow-2xs"
                      >
                        <FaCheckCircle className="text-gold flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link href="/OnlineAdmission">
                    <button className="px-6 py-3 rounded-xl bg-[#001b44] hover:bg-[#0a2558] text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2">
                      <span>Enroll in {stage.name.split("&")[0]}</span>
                      <span className="text-gold">→</span>
                    </button>
                  </Link>
                  <Link href="/ContactUs">
                    <button className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-dark font-medium text-sm border border-slate-300 transition-all">
                      Visit Campus
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-[#001738]">
                <Image
                  src={stage.image}
                  alt={stage.name}
                  fill
                  className={`object-cover ${stage.imagePos || "object-top"}`}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#d7a51b] font-bold">
                    NEET School System
                  </p>
                  <p className="text-sm sm:text-base font-semibold">
                    {stage.classes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#001b44] via-[#092556] to-[#00122e] text-white p-8 sm:p-12 text-center space-y-4 border border-white/10 shadow-xl">
          <span className="text-xs font-bold text-gold uppercase tracking-widest">
            Admissions Open Now
          </span>
          <h3 className="font-berlin text-2xl sm:text-4xl text-white">
            Give Your Child the NEET Academic Advantage
          </h3>
          <p className="text-xs sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Contact our admissions office or book a campus visit to learn more about
            our syllabus, classroom environment, and fee structure.
          </p>
          <div className="pt-2 flex justify-center gap-3 flex-wrap">
            <Link href="/OnlineAdmission">
              <button className="px-8 py-3.5 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95">
                Apply for Admission →
              </button>
            </Link>
            <a href="tel:+923007441617">
              <button className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur transition-all">
                Call: 0300-7441617
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
