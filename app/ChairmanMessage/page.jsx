import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaGraduationCap, FaCheckCircle } from "react-icons/fa";

const ChairmanMessage = () => {
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

  return (
    <main>
      <HeroHeader
        title={"Chairman & Principal's Message"}
        subtitle="Leadership with Experience and Purpose"
        tagline="Where Learning Becomes Leadership"
        description="With extensive experience in education and school leadership, the Chairman & Principal provides academic direction focused on educational quality, discipline, character development and student success."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#001b44] to-[#0a2558]">
              <Image
                src="/director.webp"
                alt="Sir Mujahid Ali Ansari"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-3 py-1 rounded-md bg-gold text-dark font-bold text-xs mb-1">
                  MA · 21 Years Experience
                </span>
                <h3 className="font-berlin text-xl sm:text-2xl text-white font-bold leading-tight">
                  Sir Mujahid Ali Ansari
                </h3>
                <p className="text-xs sm:text-sm text-gold font-medium">
                  Chairman & Principal
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-main uppercase tracking-widest">
                Message From School Leadership
              </span>
              <h2 className="h2 text-dark">
                Dear Students, Parents, <br />
                <span className="text-main">&amp; Well-Wishers</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray leading-relaxed">
              <p>
                Welcome to <strong>NEET School System, Gujranwala</strong>. We believe that
                education is far more than rote memorization or mere examination scores — it
                is the profound process of developing confident, responsible, disciplined,
                creative, and principled individuals who are prepared to contribute
                positively to society.
              </p>
              <p>
                From Play Group to Matric, our school provides a safe, respectful, stimulating,
                and supportive environment where every child is encouraged to learn, explore,
                participate, and grow. We combine quality academic instruction with character
                building, Islamic values, critical thinking, communication skills, and leadership
                development.
              </p>
              <p>
                With over 21 years of experience as Principal, my foremost priority is ensuring
                that our students receive concept-based teaching, personal attention, and sincere
                mentorship from committed educators.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#001b44] text-white space-y-3">
              <h4 className="text-sm font-bold text-gold uppercase tracking-wider flex items-center gap-2">
                <FaAward />
                <span>Our Core Leadership Priorities</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                {priorities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/90">
                    <span className="text-gold font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <div>
                <p className="font-berlin text-lg sm:text-xl font-bold text-dark">
                  Sir Mujahid Ali Ansari
                </p>
                <p className="text-xs text-gray">
                  Chairman & Principal (MA) · NEET School System
                </p>
              </div>
              <Link href="/OnlineAdmission" className="ml-auto">
                <button className="px-6 py-3 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm shadow-md transition-all active:scale-95">
                  Apply for Admission →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChairmanMessage;

